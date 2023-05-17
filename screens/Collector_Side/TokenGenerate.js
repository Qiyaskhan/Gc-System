import QRCode from 'react-native-qrcode-svg';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
const Scan_Token = () => {
  const [msg, setMsg] = useState('token1');
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder='type any msg'
        color='black'
        value={msg}
        onChangeText={txt => {
          if (txt == '') {
            setMsg('NA')
          } else {
            setMsg(txt);
          }
          setMsg(txt);
        }}
        style={{
          width: '98%',
          marginTop: 50,
          height: 50,
          borderRadius: 20,
          alignSelf: 'center',
          paddingLeft: 30,
          borderWidth: 0.5,

        }} />
      {/* <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'purple',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 50
        }}
      >
        <Text style={{ color: '#fff' }}>Generate QR Code</Text>
      </TouchableOpacity> */}
      <View
        style={{
          marginTop: 50,
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <QRCode value={msg} color={'cyan'} backgroundColor='black'
          size={200} />
      </View>
    </View>
  )
}
export default Scan_Token
