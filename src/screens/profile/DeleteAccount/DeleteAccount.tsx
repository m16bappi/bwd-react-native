import React from 'react'
import {View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Button, Text, makeStyles} from '@rneui/themed'

import {RouteStack} from 'navigators/routes'

type DeleteAccountProps = {
  navigation: NativeStackScreenProps<RouteStack, 'Settings'>['navigation']
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({navigation}) => {
  const styles = useStyle()

  return (
    <View style={styles.container}>
      {/* Todo: will add i18n text */}
      <Text style={styles.title}>Delete account:</Text>
      <Button
        title='Delete'
        size='sm'
        color='error'
        onPress={() => navigation.navigate('DeleteAccount')}
      />
    </View>
  )
}

const useStyle = makeStyles(({colors}) => ({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.bgPaper,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
}))

export default DeleteAccount
