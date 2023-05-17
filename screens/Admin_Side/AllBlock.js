import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import { Button } from 'react-native-paper'
import AllBlockCard from '../../component/AllBlock/AllBlockCard'
const AllBlock = ({ navigation }) => {
    const [driver, setdriver] = useState([]);
    const getDrivers = async () => {
        try {
            const response = await fetch
                (global.ip+"Admin/Allblocks");
            const myData = await response.json();
            setdriver(myData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDrivers();
    }, []);
    const Secheduleblock=()=>{
        navigation.navigate('Login')
    }
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ width: '90%', height: "90%", marginLeft: '5%' }}> 
                <ScrollView>
                {
                    driver.map(Items => {
                        return (
                            <View style={{ flex: 1 }}>
                            <AllBlockCard item={Items} key={Items.id}
                            
                             /></View>
                        )
                    })
                }
                </ScrollView>
                <Button mode="contained" onPress={() =>
                    navigation.navigate('AddBlock')}
                    style={styles.btn}>
                    AddBlock
                </Button>
            </View>


        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg: {
        height: '100%',
    },
    btn: {
        backgroundColor: '#000080',
        width: '40%',
        alignSelf: 'center',
        
    },
})
export default AllBlock