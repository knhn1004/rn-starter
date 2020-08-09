import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.first} />
      <View style={styles.second} />
      <View style={styles.third} />
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  first: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  second: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50,
  },
  third: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
})

export default BoxScreen
