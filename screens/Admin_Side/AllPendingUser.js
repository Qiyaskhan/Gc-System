import { View, Text, ImageBackground, StyleSheet, ScrollView, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import AllPendingUserCard from '../../component/AllPendingUsers/AllPendingUserCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
const AllPendingUser = ({ navigation }) => {
    const [pendingUser, setpendingUser] = useState([]);
    const getPendingUser = async () => {
        try {
            const response = await fetch
                (global.ip + "Admin/Allpendingusers");
            const myData = await response.json();
            setpendingUser(myData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getPendingUser();
        Remove_User();
    }, []);
    function Remove_User() {
        fetch(global.ip + `Admin/Removeuser?uid=3013`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to delete resource');
            })
            .then(() => {
                // resource deleted successfully
                console.log('deleted successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ width: '90%', height: "90%", marginLeft: '5%' }}>
                <ScrollView>
                    {
                    pendingUser.map((Items,d) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <AllPendingUserCard item={Items} key={d} 
                                       />
                                    {/* <View style={styles.btn}>
                                        <Button
                                            onPress={() => {
                                                Remove_User()
                                                ToastAndroid.show('Requested Accepted', 2000)
                                            }}>Accept</Button>
                                        <Button>Remove</Button>
                                    </View> */}
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
export default AllPendingUser