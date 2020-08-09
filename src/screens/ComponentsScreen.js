import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Oliver'
  return (
    <View>
      <Text style={styles.header}>Getitng started with react native!</Text>
      <Text style={styles.paragragh}>My name is {name}.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  paragragh: {
    fontSize: 20,
  },
})

export default ComponentsScreen
