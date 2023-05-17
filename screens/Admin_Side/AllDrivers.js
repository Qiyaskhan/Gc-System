import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import { Button } from 'react-native-paper'
import AllDriversCards from '../../component/AllDriversCards/AllDriversCards'
const AllDrivers = ({ navigation }) => {
    const [driver, setdriver] = useState([]);
    const getDrivers = async () => {
        try {
            const response = await fetch
                (global.ip + "Admin/AllDriver?utype=driver");
            const myData = await response.json();
            setdriver(myData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDrivers();
    }, []);
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ width: '90%', height: "85%", marginLeft: '5%' }}>   
            <ScrollView>
                {
                    driver.map((Items,p) => {
                        return (
                            <View style={{flex:1}}>
                                <AllDriversCards item={Items} key={p} 
                                />
                                </View>
                        )
                    })
                }  
                 </ScrollView>
                <Button mode="contained" onPress={() =>
                    navigation.navigate('AddDrivers')}
                    style={styles.btn}>
                    Add
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
        width: '30%',
        alignSelf: 'center',
    },
})
export default AllDrivers