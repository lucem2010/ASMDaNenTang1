import { StyleSheet, Text, View, Image, TextInput, ScrollView, RefreshControl, StatusBar, FlatList, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


var apiLoai = 'https://65bd8b00b51f9b29e93389f8.mockapi.io/Loai';
var apihang1 = 'https://65bdb61eb51f9b29e933a23b.mockapi.io/hang';
var apicart = 'https://65d1d831987977636bfb8aa9.mockapi.io/cart';


const DaDaHat = [
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê đen',
    huongVi: 'Thơm ngon',
    gia: '4.20'
  },
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê trắng',
    huongVi: 'Thơm mát',
    gia: '4.20'
  },
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê đen',
    huongVi: 'Thơm ngon',
    gia: '4.20'
  },
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê trắng',
    huongVi: 'Thơm mát',
    gia: '4.20'
  },
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê đen',
    huongVi: 'Thơm ngon',
    gia: '4.20'
  },
  {
    Img: require('../imgApp/hatcafe.jpg'),
    tenDoUong: 'Cà phê trắng',
    huongVi: 'Thơm mát',
    gia: '4.20'
  },

]


const Item = ({ loai, selectedLoai, setSelectedLoai }) => {
  const handlePress = () => {
    setSelectedLoai(loai.name);
  };

  return (
    <View style={styles.itemLoai}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.Loai, { color: selectedLoai === loai.name ? '#D17842' : 'white' }]}>
          {loai.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemHang1 = ({ nc, navigation,addToCart }) => (
  <TouchableOpacity style={styles.itemSanPham} onPress={() => navigation.navigate('productDetails', { nc })}>

    <Image style={{ width: 130, height: 180, borderRadius: 20, alignSelf: 'center' }} source={{
      uri: nc.AnhSanPham
    }} />

    <Text style={{ fontSize: 17, color: 'white' }} >{nc.TenSanPham}</Text>
    <Text style={{ color: 'white' }} >{nc.HuongVi}</Text>


    <View style={styles.giaThemGioHang}>
      <Text style={{ marginTop: 13, color: 'white', fontSize: 17, fontWeight: 'bold' }} >${nc.GiaSanPhamS}</Text>
      <TouchableOpacity onPress={() =>{addToCart(nc)}}>
        <Image source={require('../imgApp/cong1.png')} />
      </TouchableOpacity>

    </View>


  </TouchableOpacity>
);




const Item3 = ({ nc }) => (
  <View style={styles.itemSanPhamHat}>
    <Image source={nc.Img}></Image>

    <Text  >{nc.tenDoUong}</Text>
    <Text  >{nc.huongVi}</Text>


    <View style={styles.giaThemGioHang}>
      <Text style={{ marginTop: 13 }} >{nc.gia}</Text>
      <TouchableOpacity onPress={() => Alert.alert('Thêm vào giỏ hàng thành công')}>
        <Image source={require('../imgApp/cong1.png')}></Image>

      </TouchableOpacity>

    </View>

  </View>

);


const home = () => {
  const navigation = useNavigation();
  const [statusBarStyle, setStatusBarStyle] = useState('light-content');
  const [statusBarTransition, setStatusBarTransition] = useState('fade');
  const [hidden, setHidden] = useState(false);
  const [selectedLoai, setSelectedLoai] = useState(null);

  const [dsLoai, setdsLoai] = useState([]);
  const [dsHang1, setdsHang1] = useState([]);



  const lay_dsLoai = async () => {
    try {
      let res = await fetch(apiLoai);
      let data = await res.json();
      setdsLoai(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    lay_dsLoai();
  }, []);


  const lay_dsHang1 = async () => {
    try {
      let res = await fetch(apihang1);
      let data = await res.json();
      setdsHang1(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    lay_dsHang1();
  }, []);

  const addToCart = (nc) => {
    fetch(apicart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nc),
    })
      .then(response => {
        if (response.ok) {
          Alert.alert('Đã thêm vào thành công')
        } else {
          Alert.alert(' thêm vào thất bại')
        }
      })
      .catch(error => {
        console.error('Lỗi khi gửi yêu cầu:', error);
      })
  }
  return (
    <View style={styles.khung}>
      <StatusBar
        animated={false}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}>

      </StatusBar>

      <View style={styles.Headers}>

        <Image source={require('../imgApp/menu.jpg')} />
        <Image source={require('../imgApp/avt.jpg')} />

      </View>
      <Text style={styles.text}>Find the best</Text>
      <Text style={styles.text}>coffee for you </Text>


      <TextInput style={styles.timKiem} placeholder='Find Your Cofee...' placeholderTextColor={'#52555A'}></TextInput>
      <ScrollView>
        <View>
          <FlatList horizontal={true} data={dsLoai} renderItem={({ item }) => <Item
            loai={item}
            selectedLoai={selectedLoai}
            setSelectedLoai={setSelectedLoai}></Item>}>
          </FlatList>
        </View>

        <View>
          <FlatList horizontal={true} data={dsHang1} renderItem={({ item }) => <ItemHang1 nc={item} navigation={navigation} addToCart={addToCart}></ItemHang1>} ></FlatList>
        </View>

        <Text style={{ fontSize: 20, color: 'white', marginTop: 10 }}>Coffe beans</Text>
        <View>
          <FlatList horizontal={true} data={DaDaHat} renderItem={({ item }) => <Item3 nc={item}></Item3>} ></FlatList>

        </View>


      </ScrollView>


    </View>

  )
}

export default home

const styles = StyleSheet.create({
  khung: {
    backgroundColor: '#0C0F14',
    flex: 1,

  },
  Headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 30
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40
  },

  timKiem: {
    width: 350,
    height: 45,
    backgroundColor: '#141921',
    marginTop: 30,
    borderRadius: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  itemLoai: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 30,
    height: 25,


  },
  Loai: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  khungSanPham: {
    backgroundColor: '#191D24',
    padding: 10,
    width: 250,
    height: 30

  },
  itemSanPham: {
    width: 150,
    height: 280,
    backgroundColor: '#252931',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 15,
    borderRadius: 20,
  },
  giaThemGioHang: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemSanPhamHat: {
    width: 170,
    height: 280,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10
  },


})