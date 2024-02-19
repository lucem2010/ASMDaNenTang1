import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';

var api = 'https://65bd8b00b51f9b29e93389f8.mockapi.io/Account';


const register = ({ navigation }) => {

  const [a, b] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LaiPassword, setLaiPassword] = useState('');

  const lay_ds = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();

      const emailExists = data.some(user => user.email === email);

      if (emailExists) {
        Alert.alert('Email đã tồn tại!');
      } else {
        handleRegistration()
        console.log('Email không tồn tại:', email);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  const handleRegistration = async () => {
    try {
      const response = await axios.post('https://65bd8b00b51f9b29e93389f8.mockapi.io/Account', {
        email,
        password
      });

      if (response.status === 201) {
        Alert.alert('Đăng ký thành công!');
      } else {
        Alert.alert('Đăng ký không thành công. Vui lòng thử lại sau.');
      }



    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      Alert.alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');

    }
  }



  const CheckDuLieu = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || LaiPassword.trim() === '') {
      Alert.alert('Không để trống các trường thông tin')
    } else if (password !== LaiPassword) {
      Alert.alert('Password không giống nhau')
    } else {
      lay_ds()

    }
  }
  return (
    <View style={styles.khung}>
      <Image source={require('../imgApp/logo.png')} style={styles.image} />
      <Text style={styles.tieuDe}>welcome to Lungo</Text>
      <Text >Register to continue</Text>
      <TextInput style={styles.textInput} placeholder='Name' placeholderTextColor={'white'} onChangeText={(txt) => setName(txt)}></TextInput>
      <TextInput style={styles.textInput} placeholder='Email Address' placeholderTextColor={'white'} onChangeText={(txt) => setEmail(txt)}></TextInput>

      <View style={styles.khungTextInput}>
        <TextInput style={styles.textInputPass} placeholder='Password' placeholderTextColor={'white'} onChangeText={(txt) => setPassword(txt)}
          secureTextEntry={!a}
        ></TextInput>

        <TouchableOpacity onPress={() => a ? b(false) : b(true)}>
          <Image
            source={a ? require('../imgApp/matmo.png') : require('../imgApp/matnham.png')}
            style={{ width: 25, height: 20, backgroundColor: 'white' }}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.khungTextInput}>
        <TextInput style={styles.textInputPass} placeholder='Re-type Password' placeholderTextColor={'white'} onChangeText={(txt) => setLaiPassword(txt)}
          secureTextEntry={!a}
        ></TextInput>

        <TouchableOpacity onPress={() => a ? b(false) : b(true)}>
          <Image
            source={a ? require('../imgApp/matmo.png') : require('../imgApp/matnham.png')}
            style={{ width: 25, height: 20, backgroundColor: 'white' }}
          />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.botton} onPress={() => CheckDuLieu()}>
        <Text style={styles.tieuDe}>Register</Text>
      </TouchableOpacity>

      <View style={styles.containerDangKi} >
        <Text style={styles.tieuDecon}>You have an account? Click
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.registerButton}>
          <Text style={{ color: '#AB6439', fontSize: 17, }}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default register

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
  textInput: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    color: 'white',
    padding: 10
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
    color: 'white',
    padding: 10
  },
  botton: {
    width: 350,
    height: 50,
    backgroundColor: '#D17842',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 20

  },
  tieuDecon: {
    fontSize: 15,
    fontStyle: 'normal',
    color: '#646566',
    fontWeight: 'bold',

  },
  containerDangKi: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  }
})