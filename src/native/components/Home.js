import React from 'react'
import { FlatList, TouchableWithoutFeedback, ScrollView, Image, View, SectionList, StyleSheet } from 'react-native'
import {
  Container, Card, CardItem, Body, Text, Content
} from 'native-base'
import { Actions } from 'react-native-router-flux'

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
/* const Home = () => (
  <Container>
    <FlatList
      numColumns={3}
      data={menu}
      renderItem={({ item }) => {
        console.log(item)
        const { key, label } = item
        return (
          <Card>
            <CardItem>
              <Body>
                <TouchableWithoutFeedback onPress={Actions[key]}>
                  <Text>
                    {label}
                  </Text>
                </TouchableWithoutFeedback>
              </Body>
            </CardItem>
          </Card>
        )
      }}
    />
  </Container>
) */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
const Home = () => (
  <Container>
    <Content>
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'D', data: ['Devin'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Content>
  </Container>
)

export default Home
