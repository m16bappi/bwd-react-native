import {View, ActivityIndicator} from 'react-native'
import {Text, makeStyles} from '@rneui/themed'

import Logo from 'components/Logo'
import BnbLogo from 'images/BNB.svg'

export type AvailableBalanceRowProps = {
  asset?: string
  data?: object
  isLoading?: boolean
  assetsPrice?: object
}

const AvailableBalanceRow = ({asset, data, isLoading, assetsPrice}: AvailableBalanceRowProps) => {
  const styles = useStyles()

  return (
    <View style={styles.assetGrid}>
      <View style={styles.iconBox}>
        {asset === 'BWG' ? <Logo height={35} width={35} /> : <BnbLogo height={35} width={35} />}

        <Text h4 h4Style={{fontSize: 15, fontWeight: '700'}}>
          {asset}
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator style={styles.gridItem} size='small' color='#0000ff' />
      ) : (
        <Text style={styles.gridItem}>62.38</Text>
      )}

      <Text style={styles.gridItem}>73.655</Text>
      <Text style={styles.gridItem}>4,237.37</Text>
    </View>
  )
}

export default AvailableBalanceRow

const useStyles = makeStyles(({colors}) => ({
  iconColor: {
    color: colors.textPrimary,
  },
  assetGrid: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
  gridItem: {
    flex: 1,
    // justifyContent: 'center',
    textAlign: 'center',
  },
  iconBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
}))
