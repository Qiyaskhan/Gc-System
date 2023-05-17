import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper';
import bgImage from '../Assets/images/peak2.jpg'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../component/CustomButton';
import AllVehicalCard from '../../component/AllVehicalCard';
const Vehical = ({ navigation }) => {
    const [users, setMyUserData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const getUserData = async () => {
        try {
            const response = await fetch(
                global.ip+"Admin/Allvehicles"
            );
            const myData = await response.json();
            setMyUserData(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (

        <ImageBackground source={bgImage} style={styles.bg}>

            <View style={{ width: '90%', height: "85%", marginLeft: '5%' }}><ScrollView>
                {

                    users.map(Items => {
                        return (
                            <View style={{ flex: 1 }}>

                                <AllVehicalCard item={Items} />
                            </View>
                        )
                    })



                }</ScrollView>
            </View>

            <ScrollView>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={styles.btn}
                            onPress={() => { navigation.navigate('Advehical') }}>ADD</Text>
                        <Text style={styles.btn}
                            onPress={() => { navigation.navigate('Admin') }}>Cancel</Text>
                    </View>
                    {/* <CustomButton 
                    title={'Add Vehical'}
                    color='white'
                    bgColor={'black'}
                    onClick={()=>{
                        navigation.navigate("AllVehical", { screen:"Advehical"});
                         }}/>
                    <CustomButton 
                        title={'update Vehical'}
                        color='white'
                        bgColor={'black'}
                        onClick={() => {
                          // navigation.navigate('AdVehical')
                        }} /> */}
                </SafeAreaView>
            </ScrollView>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({

    bg: {
        height: '100%'
    },

    card: {

        margin: 20,
        borderRadius: 15,
    },
    home: {
        color: '#b8860b',
        fontSize: 27,
        textAlign: 'right',
    },
    btn: {
        backgroundColor: '#191970',
        height: 40,
        width: 80,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 20,
        borderRadius: 15,
        fontWeight: 'bold',
        fontSize:20,
        color:'white'
    },
})
export default Vehical