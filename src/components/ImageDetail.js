import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, image, score }) => {
  return (
    <View style={styles.detailBox}>
      <Image source={image} style={styles.img} />
      <Text style={styles.text}>{!!title ? title : 'image detail'}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  detailBox: {
    marginBottom: 20,
    alignItems: 'center',
  },
})

export default ImageDetail
