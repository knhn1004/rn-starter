import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
