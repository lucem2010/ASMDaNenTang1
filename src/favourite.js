import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

var apifavourite = 'https://65d1d831987977636bfb8aa9.mockapi.io/favourite';
const FavouriteItem = ({ nc }) => {
    return (
        <View style={styles.khungItem}>
            <ImageBackground style={styles.banner}
                imageStyle={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
                source={{ uri: nc.AnhSanPham }}>
                <View style={styles.containerImgTim}>
                    <Image style={{ width: 35, height: 35 }} source={require('../imgApp/traitimdo.jpg')}></Image>

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

                        <View style={{ width: 130, height: 50, borderRadius: 20, backgroundColor: '#141921', justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ color: 'white' }}>Medium Roasted</Text>
                        </View>

                    </View>

                </View >


            </ImageBackground>
            <View style={styles.tinTucDuoiBanner}>
                <Text style={styles.textTinTuc}>Description</Text>
                <Text style={styles.textTinTuc}>{nc.MoTaSanPham}</Text>

            </View>
        </View>

    );
};

const favourite = () => {
    const [dsFavourite, setdsFavourite] = useState([]);

    const lay_dsFavourite = async () => {
        try {
            let res = await fetch(apifavourite);
            let data = await res.json();
            setdsFavourite(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        lay_dsFavourite();
    }, []);

    return (
        <View style={styles.khung}>
            <View style={styles.Header}>
                <Image source={require('../imgApp/menu.jpg')}></Image>
                <Text style={styles.title}>favourite</Text>
                <Image source={require('../imgApp/avt.jpg')} />
            </View>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"
                zIndex={1}>
            </StatusBar>
            <FlatList
                data={dsFavourite}
                renderItem={({ item }) => <FavouriteItem nc={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default favourite

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

    bannerCon1: {
        flex: 1,

    },
    bannerCon2: {
        flex: 0.4,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%'
    },
    khungbannerCon2: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    textTinTuc: {
        color: 'white',
        fontSize: 15,
    },
    khungItem: {
        width: '100%',
        height: 600,
        padding: 15,
        alignItems: 'center',

    },
    banner: {
        width: 360,
        height: 460,

    },
    tieuDe: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,

    },
    tinTucDuoiBanner: {
        width: 360,
        backgroundColor: '#14171D',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 15

    },
    containerImgTim:{
        width:'100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:15
    }



})