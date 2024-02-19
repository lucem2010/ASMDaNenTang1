import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

var apiCart = 'https://65d1d831987977636bfb8aa9.mockapi.io/cart'

const Item = ({ nc }) => {
  let [soLuong, setSoLuong] = useState(1); // Sử dụng useState để lưu trữ số lượng sản phẩm

  return (
    <View style={styles.khungItemMe}>
      <View style={styles.khungItem}>
        <View style={styles.ItemTrai}>
          <Image style={{ width: 130, height: 150, borderRadius: 20, padding: 10 }} source={{ uri: nc.AnhSanPham }} />
        </View>
        <View style={styles.ItemPhai}>

          <Text style={{ color: 'white', fontSize: 20 }}>{nc.TenSanPham}</Text>
          <Text style={{ color: 'white' }}>{nc.HuongVi}</Text>

          <View style={styles.KhungSizeGia}>
            <View style={styles.khungSize}>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>S</Text>
            </View>
            <Text style={{
              marginTop: 15, marginLeft: 20, color: 'white'
              , fontSize: 20, fontWeight: 'bold'
            }}>${nc.GiaSanPhamS*soLuong}</Text>
          </View>
          <View style={styles.khungChonSoLuong}>
            <TouchableOpacity style={styles.truCong} onPress={() => {
              if (soLuong > 1) {
                setSoLuong(soLuong - 1); // Giảm số lượng sản phẩm
              }
            }}>
              <Text style={{ fontSize: 20 }}>-</Text>
            </TouchableOpacity>
            <View style={styles.khungSize}>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{soLuong}</Text>
            </View>
            <TouchableOpacity style={styles.truCong} onPress={() => {
              setSoLuong(soLuong + 1); // Tăng số lượng sản phẩm
            }}>
              <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};



const cart = () => {
  const [dsCart, setdsCart] = useState([]);

  const lay_dsCart = async () => {
    try {
      let res = await fetch(apiCart);
      let data = await res.json();
      setdsCart(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    lay_dsCart();
  }, []);

  return (
    <View style={styles.khung}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
        zIndex={1}>
      </StatusBar>

      <View style={styles.Header}>
        <Image source={require('../imgApp/menu.jpg')}></Image>
        <Text style={styles.title}>Cart</Text>
        <Image source={require('../imgApp/avt.jpg')} />
      </View>
      <FlatList
        data={dsCart}
        renderItem={({ item }) => <Item nc={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default cart

const styles = StyleSheet.create({
  khung: {
    flex: 1,
    backgroundColor: '#0C0F14'
  },
  Header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  khungItemMe: {
    width: '100%',
    height: 230,
    padding: 20
  },
  khungItem: {
    width: 370,
    height: 200,
    padding: 15,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#AEAEAE',
    borderRadius: 15
  },
  ItemTrai: {
    flex: 1.4,
  },
  ItemPhai: {
    flex: 1.6,
  },
  khungSize: {
    width: 77,
    height: 40,
    backgroundColor: '#141921',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  khungGia: {
    width: 70,
    height: 30,
    backgroundColor: '#141921',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  KhungSizeGia: {
    flexDirection: 'row'
  },
  khungChonSoLuong: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  truCong: {
    width: 40,
    height: 40,
    backgroundColor: '#D17842',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10
  },


})