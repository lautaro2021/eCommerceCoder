import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children}) => {
  return (
    <View style = {styles.cardContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 'auto',
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
        width: 300,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
        marginVertical: 10,
        borderRadius: 8,
    }
})