import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const AllGarbageRequest = (props) => {
    return (
        <View style={[{
            margin: 15, height: '50%', backgroundColor: 'white',
            borderRadius: 5
        }, styles.shadowstyle]}>
            <Text style={{
                textAlign: 'center', color: 'black',
                fontSize: 20, fontWeight: 'bold'
            }}> Grabage Request</Text>
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: 'black' }}>Garbage_id: {props.item.Garbage_id}</Text>
                <Text style={{ color: 'black' }}>User_Name:   {props.item.User_name}</Text>
                <Text style={{ color: 'black' }}>City:      {props.item.City} </Text>
                <Text style={{ color: 'black' }}>Area :    {props.item.Area}</Text>
                <Text style={{ color: 'black' }}>Block:    {props.item.Block_name} </Text>
                <View style={styles.btn}>
                    <Button>Accept</Button>
                    <Button>Remove</Button>
                </View>
            </View>

        </View>
    )
}

export default AllGarbageRequest

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