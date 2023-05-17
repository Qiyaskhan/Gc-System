import { View, Text, ImageBackground, StyleSheet,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AllTokenCard from '../component/Tokans/AllTokenCard'
import { Button } from 'react-native-paper'
import bgImage from './Assets/images/peak2.jpg'
const AllToken = ({ navigation }) => {
    const [staff, setstaff] = useState([]);
    const getStaff = async () => {
        try {
            const response = await fetch
                (global.ip + "User/Mytokens?User_id=4014");
            const myData = await response.json();
            // alert(myData);
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
            <View><View><ScrollView>
                {
                    staff.map((Items,t) => {
                        return (
                            <AllTokenCard item={Items} key={t} />
                        )
                    })
                } 
                <Text style={styles.btn}
                    onPress={() => {
                        navigation.navigate('ScanScreen')
                    }}>ADD</Text>
            </ScrollView>
                </View>
                
                 </View>


        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg: {
        height: '100%',
    },
    btn: {
        backgroundColor: '#191970',
        height: 40,
        width: 80,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 25,
        borderRadius: 15,
        fontWeight: 'bold',
    },
})
export default AllToken