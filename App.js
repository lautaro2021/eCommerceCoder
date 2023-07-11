import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import {useFonts} from 'expo-font';
import { useState } from 'react';

export default function App() {
  //Acá se manejará el estado para seleccionar una category y un producto
  const [actualCategory, setActualCategory] = useState('');

  const [fontsLoaded] = useFonts({
    'RobotoBold': require('./src/Assets/Fonts/Roboto/Roboto-Bold.ttf')
  });

  if(!fontsLoaded) {
    return null;
  }

  const goHome = () => {
    setActualCategory('');
  }
  
  return (
    <View style = {styles.container}>
      <Header/>
      {
        actualCategory 
        ?
        <ItemListCategory actualCategory={actualCategory} goHome = {goHome}/>
        :
        <Home setActualCategory={setActualCategory}/>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
