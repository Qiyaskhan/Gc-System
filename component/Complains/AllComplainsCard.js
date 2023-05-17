import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useState, useEffect } from 'react';
const AllComplainsCard = (props) => {
    const[Cid, setCid] = useState('');
    const AcceptComplains = async () => {

        const response = await fetch(global.ip + "Admin/acceptComplaints?Cid=80", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                Cid:3007,
            })



        })}
    useEffect(() => {
        AcceptComplains();
    }, []);
    return (

        <View style={[{ margin: 20, height: '100%', backgroundColor: 'white', borderRadius: 5 },
        styles.shadowstyle]}>

            <Text style={{
                textAlign: 'center', color: 'black', fontSize: 20,
                fontWeight: 'bold'
            }}>My Package</Text>
            <View style={{ paddingLeft: 10,margin:10 }}>
                <Text style={{ color: 'black' }}>Complain_id:   {props.item.Cid}</Text>
                <Text style={{ color: 'black' }}>User_name :   {props.item.User_name}</Text>
                <Text style={{ color: 'black' }}>Description:    {props.item.Description}</Text>
                <Text style={{ color: 'black' }}>City:    {props.item.City}</Text>
                <Text style={{ color: 'black' }}>Area:      {props.item.Area} </Text>
                <Button
                    onPress={() => {
                        AcceptComplains()
                    }}>Accept</Button>
                <Button>Remove</Button>
            </View>

        </View>
    )
}

export default AllComplainsCard

const styles = StyleSheet.create({
    shadowstyle: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'green',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,

    },
    btn: {

        width: '30%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
})