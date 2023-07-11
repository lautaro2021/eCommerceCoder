import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

const Search = ({
    onSearch,
    error,
    goHome
}) => {
    const [keyword, setKeyword] = useState("")

  return (
    <View style ={styles.container}>
        <Pressable style = {styles.backButton} onPress={goHome}>
            <Text>Go Home</Text>
        </Pressable>
        <View style = {styles.searchContainer}>
            <TextInput style ={styles.input} 
                placeholder='Search...'
                value={keyword}
                onChangeText={setKeyword}
            />
            <Pressable onPress={()=>onSearch(keyword)}>
                <FontAwesome name="search" size={24} color="black" />
            </Pressable>
            <Pressable onPress={()=> setKeyword("")}>
                <FontAwesome5 name="eraser" size={24} color="black" />
            </Pressable>
        </View>

        <Text style = {styles.errorText}>
            {error && "Ingrese solo numeros o letras"}
        </Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
        gap: 18,
        marginVertical: 20,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.pink,
        borderRadius: 10,
    },
    searchContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },

})