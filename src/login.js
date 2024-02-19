import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
var api = 'https://65bd8b00b51f9b29e93389f8.mockapi.io/Account';

const login = ({ navigation }) => {
  const [a, b] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const lay_ds = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();

      const user = data.find(userData => userData.email === email && userData.password === password);

      if (user) {
        navigation.navigate('bottomtab')
      } else {
        Alert.alert('Email hoặc mật khẩu không đúng!');
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const checkLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('email  hoặc mật khẩu trống');
    } else {
      lay_ds();
    }
  }


  return (
    <View style={styles.khung}>
      <Image source={require('../imgApp/logo.png')} style={styles.image} />
      <Text style={styles.tieuDe}>welcome to Lungo</Text>
      <Text >login to continue</Text>

      <TextInput style={styles.textInput} placeholder='Email Address' placeholderTextColor={'white'}
        onChangeText={(txt) => setEmail(txt)}></TextInput>

      <View style={styles.khungTextInput}>
        <TextInput style={styles.textInputPass} placeholder='Password' placeholderTextColor={'white'}
          secureTextEntry={!a} onChangeText={(txt) => { setPassword(txt) }}
        ></TextInput>

        <TouchableOpacity onPress={() => a ? b(false) : b(true)}>
          <Image
            source={a ? require('../imgApp/matmo.png') : require('../imgApp/matnham.png')}
            style={{ width: 25, height: 20, backgroundColor: 'white' }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botton} onPress={() => checkLogin()}>
        <Text style={styles.tieuDe}>Sing In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botton1}>
        <View style={styles.khungicon}>
          <Image source={require('../imgApp/google.png')} style={styles.icon} />
        </View>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <View style={styles.containerDangKi} >
        <Text style={styles.tieuDecon}>Don't have account? Click
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')} style={styles.registerButton}>
          <Text style={{ color: '#AB6439', fontSize: 17, }}>Register</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tieuDecon}>Forget Password? Click <Text style={{ color: '#AB6439' }}>Reset</Text></Text>
    </View>
  )
}

export default login

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
  tieuDe: {
    fontSize: 25,
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 'bold',
  },
  tieuDecon: {
    fontSize: 15,
    fontStyle: 'normal',
    color: '#646566',
    fontWeight: 'bold',

  },
  textInput: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    color: 'white',
    padding: 10,

  },
  khungTextInput: {
    flexDirection: 'row',
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  textInputPass: {
    flex: 1,
    padding: 10,
    color: 'white'
  },
  botton: {
    width: 350,
    height: 50,
    backgroundColor: '#D17842',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10

  },

  botton1: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    backgroundColor: '#D17842',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10

  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  khungicon: {
    flex: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2,
  },
  containerDangKi: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

  }
})