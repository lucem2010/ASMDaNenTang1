import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const welcome = ({ navigation }) => {
  const [statusBarStyle, setStatusBarStyle] = useState('light-content');
  const [statusBarTransition, setStatusBarTransition] = useState('fade');
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const time = setTimeout(() => {
      navigation.navigate('login')
    }, 3000)
    return () => clearTimeout(time);
  }, [])
  return (
    <View style={styles.khung}>
      <StatusBar
        animated={false}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}>
      </StatusBar>
      <Image source={require('../imgApp/logo.png')} style={styles.image} />
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  khung: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
