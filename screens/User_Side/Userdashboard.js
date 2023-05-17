import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import bgImage from '../Assets/images/peak2.jpg'
export default function Userdashboard({ navigation }) {
    return (
        <ImageBackground source={bgImage} style={{height:'100%'}}>
        <View style={{margin:10,alignSelf:'center'}}>
            <View style={styles.container}>
                <View style={styles.collector} >
                        <TouchableOpacity onPress={() => navigation.navigate('UserMyPackages')}>
                        <Icon name='user' style={styles.usr} />
                        <Text style={styles.txtcollect}>
                            My_packages</Text></TouchableOpacity>
                </View>
                <View style={styles.collector}>
                    <TouchableOpacity onPress={() => navigation.navigate('UserPackages')} >
                        <Icon name='gift' style={styles.gift} />
                        <Text style={styles.txtcollect}> Packages </Text></TouchableOpacity></View>

            </View>
            <View style={styles.container}>
                <View style={styles.collector}>
                        <TouchableOpacity onPress={() => navigation.navigate('SendGarbage_request')} >
                        <Icon name='comment' style={{
                            color: '#00bfff', fontSize: 30,
                            alignSelf: 'center',
}} />
                        <Text style={styles.txtcollect}>Garbage Request</Text></TouchableOpacity></View>
                <View style={styles.collector}>
                        <TouchableOpacity onPress={() => navigation.navigate('Complains')} >
                        <Icon name='exclamation-triangle' style={{
                            fontSize: 30,
                            alignSelf: 'center',
                            color:'red'
                        }} />
                        <Text style={styles.txtcollect}>Complain </Text></TouchableOpacity></View>
            </View>


        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    collector: {
        height: 90,
        backgroundColor: '#dcdcdc',
        borderRadius: 30,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

    },
    txtcollect: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    usr: {
        color: 'gray',
        fontSize: 30,
        alignSelf: 'center'

    },
    container: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-evenly'
    },
    gift: {
        color: '#c71585',
        fontSize: 30,
        alignSelf: 'center'
    },
})