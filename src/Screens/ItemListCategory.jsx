import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

import { expression3 } from '../Validations/expressions';
import { evaluation3 } from '../Validations/expressions'

const ItemListCategory = ({
  actualCategory,
  goHome
}) => {

  const [categorySelected, setCategorySelected] = useState(actualCategory)
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState(false);

  useEffect(()=> {
    //Lógica de manejo de category
    const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.toLowerCase().includes(keyword.toLowerCase()));
    setProducts(productsFiltered)

  }, [categorySelected, keyword])

  const onSearch = (input) => {
    const evaluation = expression3.test(input);
    if(evaluation) {
      setKeyword(input);
      setKeywordError(false);
    }else{
      setKeywordError(true);
    }

  }  

  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          goHome={goHome}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => ProductItem({item})}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        alignItems: 'center'
    }
})