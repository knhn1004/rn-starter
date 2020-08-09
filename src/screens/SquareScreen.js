import React, { useState, useMemo, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
}

const reducer = (state = initialState, action) => {
  if (!!action.type && action.type === 'reset') {
    return initialState
  }

  switch (action.color) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {
            ...state,
            red: state.red + action.amount,
          }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {
            ...state,
            green: state.green + action.amount,
          }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.amount,
          }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  const COLOR_INCREMENT = 15

  // add: true or false(minus)
  const handleAlt = (color, add) => {
    dispatch({
      color: color.toLowerCase(),
      amount: add ? COLOR_INCREMENT : -COLOR_INCREMENT,
    })
  }

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const color = `rgb(${red}, ${green}, ${blue})`

  return (
    <View style={styles.container}>
      <ColorCounter handleAlt={handleAlt} color="Red" />
      <ColorCounter handleAlt={handleAlt} color="Green" />
      <ColorCounter handleAlt={handleAlt} color="Blue" />
      <Text>RGB: {`${red}, ${green}, ${blue}`}</Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: color,
        }}
      />
      <Button title="reset" onPress={handleReset} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default SquareScreen
