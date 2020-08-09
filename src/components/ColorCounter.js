import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color, handleAlt }) => {
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => handleAlt(color, true)}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => handleAlt(color, false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
})

export default ColorCounter
