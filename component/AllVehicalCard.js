import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const AllVehicalCard = (props) => {
    return (
        
        <View style={[{ width: '100%', height: '90%', backgroundColor: 'white', borderRadius:20,alignItems:'center' },
         styles.shadowstyle]}>
            <View style={{ paddingLeft: 20, height: 100 }}>
                <Text style={{ color: 'black', margin: 5, fontWeight: 'bold',fontSize:15 }}>Vehical_Name:    {props.item.Vehicle_name}</Text>
                <Text style={{ color: 'black', margin: 5, fontWeight: 'bold', fontSize: 15 }}>reg_no:          {props.item.Vehicle_regno} </Text>
                </View>

        </View>
       
    )
}



const styles = StyleSheet.create({
    shadowstyle: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'green',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,

    }

})
export default AllVehicalCard