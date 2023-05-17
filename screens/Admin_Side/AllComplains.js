import { View, Text, ImageBackground, StyleSheet, ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import AllPendingUserCard from '../../component/AllPendingUsers/AllPendingUserCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import AllComplainsCard from '../../component/Complains/AllComplainsCard'
const AllComplains = ({ navigation }) => {
    const [complains, setcomplains] = useState([]);
    const getAllComplians = async () => {
        try {
            const response = await fetch
                (global.ip+"Admin/AllUsersComplaints");
            const myData = await response.json();
            setcomplains(myData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllComplians();
    }, []);
    return (
        <ImageBackground source={bgImage} style={styles.bg}>

            <View style={{ width: '90%', height: "70%", margin:10,padding:10 }}>
                <ScrollView>

                    {
                        complains.map(Items => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <AllComplainsCard item={Items} key={Items.user} />
                                </View>

                            )

                        })

                    }</ScrollView>


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
        alignSelf: 'flex-end',
    },
})
export default AllComplains