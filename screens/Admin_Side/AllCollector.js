import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AllCollectorCards from '../../component/AllStaffCards/AllCollectorCard'
import bgImage from '../Assets/images/peak2.jpg'
import { Button } from 'react-native-paper'
const AllCollector = ({ navigation }) => {
    const [staff, setstaff] = useState([]);
    const getStaff = async () => {
        try {
            const response = await fetch
                (global.ip + "Admin/AllCollector?utype=collector");
            const myData = await response.json();
            setstaff(myData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getStaff();
    }, []);
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ width: '90%', height: "90%", marginLeft: '5%' }}>
                <ScrollView>
                {
                   staff.map((Items,s)=> {
                        return (
                            <AllCollectorCards item={Items} key={s} />
                        )
                    })
                }</ScrollView>
                <Button  mode="contained" onPress={() =>
                    navigation.navigate('AddCollector')}
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
        width:'30%',
        alignSelf:'flex-end',
    },
})
export default AllCollector