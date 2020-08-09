import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([])

  return (
    <View style={styles.container}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      {Object.keys(colors).length > 0 && (
        <FlatList
          data={colors}
          keyExtractor={color => color}
          renderItem={({ item }) => (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          )}
        />
      )}
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default ColorScreen
