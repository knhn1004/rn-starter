import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Oliver', age: 20 },
    { name: 'Yumi', age: 20 },
    { name: 'Dog', age: 20 },
    { name: 'Wen', age: 20 },
    { name: 'Oliver1', age: 20 },
    { name: 'Yumi1', age: 20 },
    { name: 'Dog1', age: 20 },
    { name: 'Wen1', age: 20 },
  ]

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ index, item }) => {
        console.log(item, index)
	return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    marginVertical: 50,
    fontSize: 30,
  },
})

export default ListScreen
