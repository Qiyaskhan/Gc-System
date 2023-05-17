import { View, Text,StyleSheet } from 'react-native'
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import
 React from 'react'

export default function Dropdown() {
    const [SelectedCity, setselectedCity] = useState('City');
    const [City] = useState(
        [
            'Peshawer',
            'islamabad',
            'rawalpindi',
            'lahore',
            'karachi',
            'FaisalAbad',
        ].sort()
    );
  return (
    <View>
          <Text style={{ color:'black',margin:5}}>Select City</Text>
          <Picker

              style={styles.drop}
              selectedValue={SelectedCity}
              onValueChange={(itemVal) => {
                  setselectedCity(itemVal);
              }}
          >
              {
                  City.map((l) => (
                      <Picker.Item label={l} value={l} />
                  )
                  )
              }
          </Picker>
    </View>
  )
}
const styles = StyleSheet.create({
    drop: {
        backgroundColor: 'white',
        marginBottom: 10,
        color: 'black',
        opacity: 0.7,
        shadowColor: 'black',
        elevation: 150,
        shadowOpacity: 0.4,
        width: 340,
        height: 40,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 70,
        alignSelf:'center'
    },
})