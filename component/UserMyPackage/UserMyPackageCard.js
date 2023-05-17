import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const UserMyPackageCard = (props) => {
    return (

        <View style={[{ margin: 10, height: '50%', backgroundColor: 'white', borderRadius: 5 },
        styles.shadowstyle]}>

            <Text style={{
                textAlign: 'center', color: 'black', fontSize: 20,
                fontWeight: 'bold'
            }}>My Package</Text>
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: 'black' }}>Package_name:   {props.item.Package_name}</Text>
                <Text style={{ color: 'black' }}>Recycle_bag:      {props.item.Recycle_bag} </Text>
                <Text style={{ color: 'black' }}>Nonrecycle_bag:    {props.item.Nonrecycle_bag}</Text>
               
            </View>

        </View>
    )
}

export default UserMyPackageCard

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