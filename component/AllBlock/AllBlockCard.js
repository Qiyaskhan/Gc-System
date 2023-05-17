import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const AllBlockCard = (props) => {
    const navigation = useNavigation();
    const val=props.item;
    const[data,setdata]=useState();
    return (
        <View style={[{ margin: 10, height: '90%', backgroundColor: 'white', borderRadius: 5 }, styles.shadowstyle]}>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Collector Details</Text>
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: 'black' }}>Block_id:   {props.item.Block_id}</Text>
                <Text style={{ color: 'black' }}>City:      {props.item.City} </Text>
                <Text style={{ color: 'black' }}>Area :    {props.item.Area}</Text>
                <Text style={{ color: 'black' }}>Block_name:    {props.item.Block_name} </Text>
                <TouchableOpacity style={styles.btn}
        onPress={()=>{
            navigation.navigate('SetscheduleBlock',{val})
             //alert(JSON.stringify(val))
        }}
                    
            ><Text>set Sechedule</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default AllBlockCard

const styles = StyleSheet.create({
    shadowstyle: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'green',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,

    },
    btn:{
        backgroundColor:'blue',
        alignItems:'flex-end',
        height:30,
        width:110,
        alignSelf:'flex-end',
        borderRadius:15,
        

    }
})