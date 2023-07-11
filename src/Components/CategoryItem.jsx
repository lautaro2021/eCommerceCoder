import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item, setActualCategory}) => {
  return (
    <Pressable onPress={() => setActualCategory(item)}>
      <Card>
          <Text style={styles.textCategory}>{item}</Text>
      </Card>
    </Pressable>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 18
    }
})