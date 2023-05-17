import { View, Text, StyleSheet, TextInput, ImageBackground,} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { Button, } from 'react-native-paper';
import bgImage from '../Assets/images/peak2.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Advehical() {
    const [Vehical, setVehical] = useState("");
    const [reg_no, setreg_no] = useState("");
    const [Users, setUsers] = useState({});
    const [City, setCity] = useState([]);
    const [selectvehi, setselectvehi] = useState();
    const [SelectedCity, setselectedCity] = useState('City')



    const onValueChangevehi = (value) => {
        //alert(value);
        setselectvehi(value);

    }
    const Add_Vehical = () => {
        fetch(global.ip + 'Admin/Addvehicle', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Vehicle_name: Vehical,
                Vehicle_regno: reg_no
            })
        });
        
    }
    const getBlockDropdown = async () => {

        try {
            const response = await fetch(
                "http://192.168.0.109/Fyp1api/api/Admin/Getcity"
                // global.ip+`Admin/Getblock?city=${City}rwp&area=${Area}`
            );
            const myData = await response.json();

            setCity(myData);
            //setusers(myData);
           // alert(JSON.stringify(myData))
             //alert(myData[1].City)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getBlockDropdown();
    }, []);


    return (
      
            <View style={styles.container}>
                 <FontAwesome5 name='car' style={styles.usr} /> 
                <Text style={{fontWeight:'bold',color:'black'}}>Add_Vehical</Text> 
                <TextInput
                    placeholder={'Add_Vehical'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={Vehical}
                    onChangeText={(actualData) => setVehical(actualData)}
                />
                <TextInput
                    placeholder={'Enter reg_no'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={reg_no}
                    onChangeText={(actualData) => setreg_no(actualData)}
                    
                />
                <Text style={{}}>choose </Text>
                <View style={{width:'100%',height:50}}>
                   
                    <Picker
                    itemStyle={styles.itemStyle}
                    style={styles.pickerStyle}
                    onValueChange={onValueChangevehi.bind(onValueChangevehi)}
                    selectedValue={selectvehi}
                >
                    {
                        City.map((item, index) => {
                            return (
                                <Picker.Item label={item.City} value={item.City} key={index} />)
                        })

                    }
                </Picker> 
                </View>
                <Button mode="contained"
                    onPress={() =>
                        Add_Vehical()}
                    style={styles.btn}>
                    Add_Vehical
                </Button>
            </View>
        
    )
}
const styles = StyleSheet.create({
    input: {
        width: 320,
        height: 50,
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'gray',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       flex:1,
        backgroundColor:'#adff2f'

    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 20,
        top: 25,
        left: 70,
        width: 140,
        padding: 2.5,
        backgroundColor: 'black'
    },
    usr: {
        fontSize: 80,
        color: 'black'
    },
    
    pickerStyle: {
        width: "96%",
        height: '100%',
        color: "white",
        fontSize: 14,
        fontFamily: "Roboto-Regular",
       // marginTop: 33,
       // marginRight: 15,
        backgroundColor: 'green'

    },
    itemStyle: {
        fontSize: 10,
        fontFamily: "Roboto-Regular",
        color: "#007aff",
        //marginTop: 50,

    },
})