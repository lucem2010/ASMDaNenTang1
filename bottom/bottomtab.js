import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import home from '../src/home';
import contact from '../src/contact';
import Icon from 'react-native-vector-icons/FontAwesome'
import cart from '../src/cart';
import favourite from '../src/favourite';
const Tab = createBottomTabNavigator();

const bottomtab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='home' component={home} options={{
                tabBarIcon: () => (<Image source={require('../imgApp/homebottom.jpg')}
                    style={{ width: 30, height: 30 }} resizeMode='stretch'></Image>)
            }}></Tab.Screen>
            <Tab.Screen name='favourite' component={favourite} options={{
                tabBarIcon: () => (<Image source={require('../imgApp/traiTim.jpg')}
                    style={{ width: 30, height: 30 }} resizeMode='stretch'></Image>)
            }}></Tab.Screen>
            <Tab.Screen name='contact' component={contact} options={{
                tabBarIcon: () => (<Image source={require('../imgApp/lienhe.jpg')}
                    style={{ width: 30, height: 30 }} resizeMode='stretch'></Image>)
            }}></Tab.Screen>

            <Tab.Screen name='cart' component={cart} options={{
                tabBarIcon: () => (<Image source={require('../imgApp/cart.jpg')}
                    style={{ width: 50, height: 35 }} resizeMode='stretch'></Image>)
            }}></Tab.Screen>

        </Tab.Navigator>
    )
}

export default bottomtab

const styles = StyleSheet.create({}) 