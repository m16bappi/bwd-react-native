export type Success = {
  success: true | boolean
}

export type Meta = {
  total: number
  limit: number
  offset: number
  page: number
}

export type User = {
  id: number
  email: string
  email_confirmed: boolean
  google_mfa_activated: boolean
  kyc_status: 'init' | 'panding' | 'approved'
  kyc_status_reason: string
  last_sign_in_at: Date
  locked_at: Date
  failed_attempts: number
  subscribed: boolean
  wallet_address: string
  wallet_address_candidate: string
  wallet_type: string
  wallet_type_candidate: string
  user_type: string
  referral_token: string
  downline_users_count: number
  payout_address: string
  status: string
  status_reason: string
  created_at: Date
  updated_at: Date
}

export type UserDetail = {
  first_name: string
  last_name: string
  phone_number: string
  profession: string
  earnings: string
  source_of_income: string
  trading_experience: string
  sumsub_email: string
  gender: string
  date_of_birth: string
  country: string
  nationality: string
  address_country: string
  address_postcode: string
  address_town: string
  address_street: string
  address_substreet: string
  address_state: string
}

export type UserInfo = {
  user_detail?: UserDetail
} & User

export type LoginResponse = {
  user: User
  token: string
}

export type KycAccessKey = {
  sucess: boolean
  result: {
    token: string
  }
}

export type Asset = {
  id: number
  max_payment_amount: string
  min_payment_amount: string
  name: string
  symbol: string
  token_amount: string | null
  paypal_max_payment_amount: string
  price: string
  market_cap: string
  static_fee_amount: string
  created_at: Date
}

type DynamicFee = {
  asset_id: number
  fee_percentage: string
  id: number
  minimum_value: string
  created_at: string
  updated_at: string
}

type EstimateFee = {
  dynamic_fee_amount: string
  dynamic_fee_percentage: string
  payment_rate: string
  received_amount: string
  static_fee_amount: string
  total_amount: string
  total_fee_amount: string
  usd_total_amount: string
  usd_total_fee: string
  storage_fee_amount: string
  storage_fee_percentage: string
  storage_fee_remaining_days: number
}

type Payment<Tdata = null> = {
  id: number
  dynamic_fee_amount: string
  dynamic_fee_percentage: string
  expires_at: string
  paid_amount: string
  payment_rate: string
  payment_type: string
  payment_data: {
    id: number
    external_id: string
    status: string
    links: string[]
  }
  received_amount: string
  static_fee_amount: string
  status: 'init' | 'accepted' | 'pending' | 'completed'
  status_reason: string
  storage_fee_amount: string
  storage_fee_percentage: string
  storage_fee_remaining_days: number
  trade_pair: string
  total_amount: string
  total_fee_amount: string
  usd_paid_amount: string
  usd_total_amount: string
  usd_total_fee: string
  user_id: number
  user_input_amount: string
  created_at: string
  updated_at: string
  transfer: Tdata
}

export type Transfer = {
  amount: string
  address: string
  confirmations: number
  created_at: string
  id: number
  recipient: string
  sender: string
  status: string
  status_reason: string
  tx_hash: string
  updated_at: string
  user_id: number
  payment_id: number
}

type TransactionChart = {
  month: number
  data: [
    {
      id: number
      amount: string
    }
  ]
}

type AssetChartItem = {
  timestamp: number
  price: string
}

type OrderHistory = {
  data: Payment<Transfer>[]
  meta: Meta
}
