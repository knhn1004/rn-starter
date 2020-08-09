import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassowrd] = useState('')
  console.log(password.length)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newVal => setPassowrd(newVal)}
      />
      {password.length < 5 && (
        <Text style={{ ...styles.text, ...styles.warning }}>
          password should be at least 5 characters
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginLeft: 15,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  warning: {
    color: 'red',
    fontSize: 15,
  },
})

export default TextScreen
