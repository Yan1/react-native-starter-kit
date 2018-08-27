import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import { Button } from 'antd-mobile-rn'
import { Actions } from 'react-native-router-flux'


const SelfHelp = () => (
  <View>
    <Text>
      自助系统
    </Text>
    <Button onClick={Actions.selfHelpDetail}>Detail</Button>
  </View>
)
export default SelfHelp
