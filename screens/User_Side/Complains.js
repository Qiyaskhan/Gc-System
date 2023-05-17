import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Connstrants from '../../component/Connstrants';
const Complains = () => {
    const [userid,setuserid]=useState();
    const [Complaint,setComplaint]=useState('');
    function userID() {
        AsyncStorage.getItem('key').then((value) => {
           //alert(value);
           setuserid(value);
        });
    }
    useEffect(() => {
        userID();
    }, []);

    const SendComplaintFun=async()=>{
     alert(Complaint);
     //alert(userid);
        const response = await fetch(global.ip+"User/Sendcomplaint", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({

                User_id: userid,
                Description: Complaint,
               

            })


        })
        const json = await response.status;
        if (json === 200) {
            alert('Complaint Registered');

        }
    }
    return (
        <View>
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Enter complains here "
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={Complaint}
                    onChangeText={(Complaint)=>{setComplaint(Complaint)}}
                />
                
            </View>
            
            <Button mode="contained"
                style={styles.btn} onPress={()=>{SendComplaintFun()}}>
                Send Complaint
            </Button>
            <Text style={{margin:30,}}>__________________________________________________</Text>
            
           
        </View>
       
    )

}
const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor:'gray',
        borderWidth: 1,
        padding: 5,
        margin:10,
        borderRadius:15
        
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        
    },
    btn: {
        borderRadius: 20,
        top: 25,
        left: 70,
        width: 270,
        padding: 4,
        
    },
})
export default Complains