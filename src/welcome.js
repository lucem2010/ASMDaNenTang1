import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const welcome = ({navigation}) => {
  useEffect(()=>{
    const time=setTimeout(()=>{
      navigation.navigate('login')
    },3000)
    return ()=>clearTimeout(time);
  },[])
  return (
    <View style={styles.khung}>
      <Image source={require('../imgApp/logo.png')} style={styles.image} />
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  khung: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100, 
    height: 100,
  },
});
