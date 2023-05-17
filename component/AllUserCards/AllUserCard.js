import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllUserCard = (props) => {
  return (
    <View style={[{
      margin: 10, height: '80%', backgroundColor: 'white',
      borderRadius: 10
    }, styles.shadowstyle]}>
     
      <Text style={{
        textAlign: 'center', color: 'black',
        fontSize: 20, fontWeight: 'bold'
      }}>User Details</Text>
      <View style={{ paddingLeft: 30 }}>
        <Text style={{ color: 'black',fontWeight:'bold' }}>Name:   {props.item.User_name}</Text>
        <Text style={{ color: 'black',fontWeight:'bold' }}>City:      {props.item.City} </Text>
        <Text style={{ color: 'black',fontWeight:'bold' }}>Area :    {props.item.Area}</Text>
        <Text style={{ color: 'black',fontWeight:'bold' }}>Street:    {props.item.Street} </Text>
        <Text style={{ color: 'black',fontWeight:'bold' }}>House_no:    {props.item.House_no} </Text>
      </View>
      
    </View>
  )
}

export default AllUserCard

const styles = StyleSheet.create({
    shadowstyle:{
        shadowOffset:{width:-2,height:4},
        shadowColor:'green',
        shadowOpacity:0.2,
        shadowRadius:3,
        elevation:8,

    }

})