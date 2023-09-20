import {Badge, BadgeProps, useTheme, Colors, makeStyles} from '@rneui/themed'

import {Status} from 'api/Response'

type BadgeStatus = Status | 'confirmed' | 'completed'

type StatusBadgeProps = {
  badgeStatus: BadgeStatus
} & BadgeProps

type StatusMapper = 'default' | 'success' | 'error' | 'warning'

const getStyles = ({colors, status}: {colors: Colors; status?: StatusMapper}) =>
  ({
    default: {
      color: colors.textPrimary,
      backgroundColor: colors.greyOutline,
    },
    error: {
      color: colors.textPrimary,
      backgroundColor: colors.error,
    },
    warning: {
      color: colors.textPrimary,
      backgroundColor: colors.warning,
    },
    success: {
      color: colors.textPrimary,
      backgroundColor: colors.success,
    },
  }[status ?? 'default'])

const StatusBadge = ({badgeStatus, badgeStyle, ...rest}: StatusBadgeProps) => {
  const {theme} = useTheme()

  const statuses: {[key: string]: StatusMapper} = {
    accepted: 'default',
    pending: 'warning',
    rejected: 'error',
    confirmed: 'success',
    completed: 'success',
  }

  const statusStyles = getStyles({colors: theme.colors, status: statuses[badgeStatus]})

  return <Badge {...rest} badgeStyle={[badgeStyle, statusStyles]} />
}

export default StatusBadge
