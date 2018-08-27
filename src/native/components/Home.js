import React from 'react'
import { FlatList, TouchableWithoutFeedback, ScrollView, Image, View, SectionList, StyleSheet } from 'react-native'
import {
  Container, Body, Text, Content
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { Button, List, Flex } from 'antd-mobile-rn'

const menu = [
  {
    key: 'selfHelp',
    label: '自助系统'
  },
  {
    key: 'tools',
    label: '小工具'
  },
  {
    key: 'relation',
    label: '连接关系'
  }
]
handlePress = (key) => {
  console.log(key)
}
const Home = () => (
  <Container style={{ padding: 10 }}>
    <Flex direction="row" wrap="wrap" justify="start" align="center">
      {
        menu.map(item => {
          return (
            <Flex.Item key={item.key} style={{ minWidth: '25%', paddingTop: 10, paddingBottom: 10 }}>
              <TouchableWithoutFeedback onPress={Actions[item.key]}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={require('../../images/app-icon.png')}  style={{ width: 20, height: 20, marginBottom: 10 }}/>
                  <Text style={{ fontSize: 14 }}>
                    {item.label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </Flex.Item>
          )
        })
      }
    </Flex>
  </Container>
)
export default Home
