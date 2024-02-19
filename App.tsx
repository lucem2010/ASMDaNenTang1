import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import welcome from './src/welcome'
import login from './src/login'
import register from './src/register'
import home from './src/home'
import bottomtab from './bottom/bottomtab'
import cart from './src/cart'
import productDetails from './src/productDetails'
import favourite from './src/favourite'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomtab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="bottomtab" component={bottomtab} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="productDetails" component={productDetails} />
        <Stack.Screen name="favourite" component={favourite} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})