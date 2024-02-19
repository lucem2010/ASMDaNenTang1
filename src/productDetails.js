import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

var apiYeuThich = 'https://65d1d831987977636bfb8aa9.mockapi.io/favourite';


const productDetails = ({ route }) => {
    const navigation = useNavigation();
    const handleback = () => {
        navigation.goBack();
    }
    const { nc } = route.params;
    const [GiaSP, setGiaSP] = useState(nc.GiaSanPhamS);
    const [selectedSize, setSelectedSize] = useState(null);
    const addToFavourite = () => {
        fetch(apiYeuThich, {
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
            .catch(error =>{
                console.error('Lỗi khi gửi yêu cầu:', error);
            } )
    }


    return (
        <View style={styles.khung}>


            <ImageBackground style={styles.banner}
                source={{ uri: nc.AnhSanPham }}>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                    zIndex={1}>
                </StatusBar>
                <View style={styles.QuayLaiYeuThich}>
                    <TouchableOpacity onPress={handleback}>
                        <Image style={{ width: 20, height: 20 }} source={require('../imgApp/thoat.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addToFavourite}>
                        <Image style={{ width: 25, height: 25 }} source={require('../imgApp/traitimdo.jpg')}></Image>
                    </TouchableOpacity>

                </View>

                <View style={styles.bannerCon1}>

                </View>

                <View style={styles.bannerCon2}>

                    <View style={styles.khungbannerCon2}>

                        <View>
                            <Text style={styles.tieuDe}>{nc.TenSanPham}</Text>
                            <Text style={{ color: 'white' }}>{nc.HuongVi}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../imgApp/iconcoffe.jpg')} />
                            <Image source={require('../imgApp/iconsua.jpg')} />
                        </View>

                    </View>


                    <View style={styles.khungbannerCon2}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginTop: 3 }} source={require('../imgApp/saocoffe.jpg')} />
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 3 }}>4.5</Text>
                            <Text style={{ color: 'white', marginLeft: 3, marginTop: 4 }}>(6,789)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../imgApp/iconcoffe.jpg')} />
                            <Image source={require('../imgApp/iconsua.jpg')} />
                        </View>

                    </View>

                </View >


            </ImageBackground>
            <View style={styles.tinTucDuoiBanner}>
                <Text style={styles.tieuDe}>Description</Text>
                <Text style={styles.textTinTuc}>{nc.MoTaSanPham}</Text>

            </View>
            <Text style={styles.Size}>Size</Text>
            <View style={styles.khungSize}>
                <TouchableOpacity style={[styles.bottonSize, selectedSize === 'S' && styles.selected]}
                    onPress={() => {
                        setSelectedSize('S');
                        setGiaSP(nc.GiaSanPhamS);
                    }}>
                    <Text style={[styles.sizes, selectedSize === 'S' && styles.selectedText]}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonSize, selectedSize === 'M' && styles.selected]}
                    onPress={() => {
                        setSelectedSize('M');
                        setGiaSP(nc.GiaSanPhamM);
                    }}>
                    <Text style={[styles.sizes, selectedSize === 'M' && styles.selectedText]}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonSize, selectedSize === 'L' && styles.selected]}
                    onPress={() => {
                        setSelectedSize('L');
                        setGiaSP(nc.GiaSanPhamL);
                    }}>
                    <Text style={[styles.sizes, selectedSize === 'L' && styles.selectedText]}>L</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.khungGiaAndBy}>
                <View style={styles.khungGia}>
                    <Text style={{ fontSize: 15, color: '#AEAEAE' }}>Price</Text>
                    <Text style={{ fontSize: 25, color: 'white' }}>${GiaSP}</Text>
                </View>
                <TouchableOpacity style={styles.ThemVaoGio}>
                    <Text style={styles.textThemVaoGio}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default productDetails

const styles = StyleSheet.create({
    khung: {
        backgroundColor: '#14171D',
        flex: 1,

    },
    Headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30
    },
    tieuDe: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,

    },

    banner: {
        width: '100%',
        height: 470,
    },
    bannerCon1: {
        flex: 1,

    },
    bannerCon2: {
        flex: 0.5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 20,
        width: '100%'
    },
    khungbannerCon2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tinTucDuoiBanner: {
        width: '100%',
        height: 130,
        backgroundColor: '#14171D',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 17
    },
    textTinTuc: {
        color: 'white',
        fontSize: 15,
        marginTop: 15
    },

    QuayLaiYeuThich: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        marginTop: 30

    },
    Size: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        color: 'white',
        marginLeft: 17
    },
    khungSize: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    bottonSize: {
        width: 100,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#52555A'

    },
    sizes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    khungGiaAndBy: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 25

    },
    ThemVaoGio: {
        width: 200,
        height: 60,
        backgroundColor: '#D17842',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textThemVaoGio: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white'
    },
    khungGia: {
        justifyContent: 'center'
    },
    selected: {
        borderColor: 'pink',
        borderWidth: 2
    },
    selectedText: {
        color: 'yellow',
    },


})