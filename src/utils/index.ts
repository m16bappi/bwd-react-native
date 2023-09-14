import {ErrorObject} from 'api/Errors'
import {EstimateFee, User} from 'api/Response'

export function isUserConfirmed(user: User) {
  return user && user.email_confirmed && user.kyc_status === 'approved'
}

export const isMfaRequired = (error: ErrorObject) => {
  if (error.code === '005') {
    const err = error?.message.toLowerCase()
    return (
      err === 'MFA code is not present'.toLowerCase() ||
      err === '2FA code is not present'.toLowerCase()
    )
  }
  return false
}

export const formatEstimatePay = (object: EstimateFee): EstimateFee => ({
  ...object,
  received_amount: parseFloat(object?.received_amount as unknown as string).toFixed(4),
  total_amount: parseFloat(object?.total_amount as unknown as string).toFixed(2),
  dynamic_fee_amount: parseFloat(object?.dynamic_fee_amount as unknown as string).toFixed(4),
})

export const shortAddress = (address: string, skip = 5) => {
  return address.slice(0, skip) + '.'.repeat(3) + address.slice(-(skip - 2))
}
