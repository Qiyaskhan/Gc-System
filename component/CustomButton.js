import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, bgColor, color, onClick }) => {
    return (
        <View>
            <TouchableOpacity style={{
                backgroundColor: bgColor,
                height: 55,
                width: '90%',
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 25,
                marginTop: 20,
            }}>
                <Text style={{ alignSelf: 'center',color:color }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton