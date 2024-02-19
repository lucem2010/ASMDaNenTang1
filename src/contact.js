import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const contact = () => {
    return (
    <ImageBackground style={styles.container} source={require('../imgApp/banner.jpg')}>
        <View style={styles.item1} >

        </View>
            <View style={styles.item2}>
                <Text style={styles.Nhan}>COFFE SHOP</Text>
                <Text style={styles.thongTinLien}>Số điện thoại:03877700205</Text>
                <Text style={styles.thongTinLien}>Email:coffeShop@gmail.com</Text>
                <Text style={styles.thongTinLien}>Nhà số 9 ngõ 71 Phường Xuân Phương</Text>

            </View>

    </ImageBackground>
  
    )
}

export default contact

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    item1:{
        flex:3
    },
    item2:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent:'center',
        padding:10
    },
    thongTinLien: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    Nhan:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }
})