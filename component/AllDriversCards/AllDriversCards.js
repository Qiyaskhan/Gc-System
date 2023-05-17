import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllDriversCards = (props) => {
  return (
    <View style={[{ margin:10,height:'90%', backgroundColor: 'white',
     borderRadius: 5 }, styles.shadowstyle]}>
      <Text style={{ textAlign: 'center',color:'black',
      fontSize:20,fontWeight:'bold' }}>Drivers Details</Text>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ color: 'black' }}>Name:   {props.item.User_name}</Text>
        <Text style={{ color: 'black' }}>City:      {props.item.City} </Text>
        <Text style={{ color: 'black' }}>Area :    {props.item.Area}</Text>
        <Text style={{ color: 'black' }}>TYpe:    {props.item.Utype} </Text>
      </View>

    </View>
  )
}

export default AllDriversCards

const styles = StyleSheet.create({
  shadowstyle: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'green',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,

  }
})