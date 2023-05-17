import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { Button } from 'react-native-paper';

const AllTokenCard = (props) => {
    return (
        <View style={[{ margin: 40, backgroundColor: 'gray', borderRadius: 5,height:190 },
         styles.shadowstyle]}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                QR Code</Text>
            <View style={{ paddingLeft: 40 }}>
                <View
                    style={{
                        marginTop: 10,
                        width: '80%',
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <QRCode value={props.item.Token_no} color={'white'} backgroundColor='black'
                        size={100} />
                </View> 
                <View><Text>{props.item.Token_no}</Text></View>
                
            </View>

        </View>
        
    )
}
export default AllTokenCard

const styles = StyleSheet.create({
    shadowstyle: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'green',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,

    }
})