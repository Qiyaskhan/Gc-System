import { View, Text, ImageBackground, StyleSheet, } from 'react-native'
import React, { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import UserMyPackageCard from '../../component/UserMyPackage/UserMyPackageCard'
import { Button } from 'react-native-paper'
const UserMyPackages = ({ navigation }) => {
    const [staff, setstaff] = useState([]);
    const [id, setid] = useState();

    const getStaff = async () => {
        try {
            const response = await fetch
                (global.ip+`User/Mypkg?uid=6027`);
            const myData = await response.json();
            setstaff(myData);
        } catch (error) {
            console.log(error);
        }
    };
    const Missing_Token = async () => {
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow'
        };

        fetch("http://192.168.0.109/Fyp1api/api/User/Missingtokens?User_id=6027", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        Missing_Token();
    }, []);
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View>
                {
                    staff.map(Items => {
                        return (
                            <UserMyPackageCard item={Items} key={Items.id} />
   
                        )
                    })
                }
                <Button
                    mode='contained'
                    style={{ margin: 50 }}
                    onPress={() => {
                        Missing_Token();
                    }}>missing_Token</Button>
                
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
export default UserMyPackages