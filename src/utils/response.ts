import {TFunction} from 'i18next'

import {User, EstimateFee, OrderHistory} from 'api/Response'
import {ErrorObject} from 'api/Errors'
import {formatDate, formatNumber} from 'utils'
import {LanguageTypes} from 'i18n/i18n'

export function isUserConfirmed(user: User) {
  return user && user.email_confirmed && user.kyc_status === 'approved'
}

export const isMfaRequired = (error: ErrorObject | null) => error && error.code === '005'

export const formatEstimatePay = (object: EstimateFee): EstimateFee => ({
  ...object,
  received_amount: parseFloat(object?.received_amount as unknown as string).toFixed(4),
  total_amount: parseFloat(object?.total_amount as unknown as string).toFixed(2),
  dynamic_fee_amount: parseFloat(object?.dynamic_fee_amount as unknown as string).toFixed(4),
})

export const formatOrders = (
  object: OrderHistory,
  currentLang: LanguageTypes,
  t: TFunction
): OrderHistory => ({
  payments: object?.payments?.map(payment => ({
    ...payment,
    orderId: `#${payment.id}`,
    paidAmount: `${formatNumber(payment.paid_amount_number, {locales: currentLang})} ${
      payment.paid_amount_currency
    }`,
    receivedAmount: `${formatNumber(payment.received_amount_number, {locales: currentLang})} ${
      payment.received_amount_currency
    }`,
    stage: payment.transfer?.status
      ? t('trade.table.headers.transfer')
      : t('trade.table.headers.payment'),

    orderStatus: payment.transfer?.status ?? payment.status,
    createdTime: formatDate(payment.created_at, 'hh:mm A'),
    createdDate: formatDate(payment.created_at, 'MMM DD,YYYY'),
  })),
  meta: object?.meta,
})
