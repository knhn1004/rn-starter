import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(1)

  const handleAdd = () => {
    setCount(prev => prev + 1)
  }

  const handleMinus = () => {
    setCount(prev => prev - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Count: {count}</Text>

      <Button title="Add" onPress={handleAdd} />
      <Button title="Minus" onPress={handleMinus} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
})

export default CounterScreen
