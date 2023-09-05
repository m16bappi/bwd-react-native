import {View} from 'react-native'
import {Text, makeStyles} from '@rneui/themed'

import Logo from 'components/Logo'
import BnbLogo from 'images/BNB.svg'

import AvailableBalanceRow from './availableBalanceRow'

const BalanceBox = () => {
  const styles = useStyles()

  return (
    <View style={styles.balanceBox}>
      <Text h3>Your Balance</Text>
      <View style={styles.assetGrid}>
        <Text style={styles.gridItem} />
        <Text style={styles.gridItem}>Price</Text>
        <Text style={styles.gridItem}>Amount</Text>
        <Text style={styles.gridItem}>Total</Text>
      </View>
      <AvailableBalanceRow asset='BWG' logo={<Logo height={35} width={35} />} isLoading={true} />
      <AvailableBalanceRow
        asset='BNB'
        logo={
          <View style={{borderRadius: 50, overflow: 'hidden', width: 35, height: 35}}>
            <BnbLogo height={35} width={35} />
          </View>
        }
      />
    </View>
  )
}

export default BalanceBox

const useStyles = makeStyles(({colors}) => ({
  balanceBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  assetGrid: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    textAlign: 'center',
  },
}))
