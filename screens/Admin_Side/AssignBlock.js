import * as React from 'react';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal, Portal, Text, Provider, TextInput, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, ImageBackground, View, ToastAndroid } from 'react-native'
import bgImage from '../Assets/images/peak2.jpg'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
const AssignBlock = ({route,navigation}) => {
    const {val} = route.params;
    const [selectvehi, setselectvehi] = useState();
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [Area, setArea] = React.useState("");
    const [City, setCity] = useState([]);
    const [Block, setBlock] = React.useState("");
    const [SelectedCity, setselectedCity] = useState('City');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const getBlockDropdown= async () => {

        try {
            const response = await fetch(
                `http://192.168.0.109/Fyp1api/api/Admin/Getblock?city=${val.City}&area=${val.Area}`
                // global.ip+`Admin/Getblock?city=${City}rwp&area=${Area}`
            );
            const myData = await response.json();
            
            setCity(myData);
            //setusers(myData);
            // alert(JSON.stringify(myData))
           // alert(myData[0].Block_name)
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        getBlockDropdown();
    }, []);
    
 
    const onValueChangevehi = (value) => {
        //alert(value);
        setselectvehi(value);

    }
    //

    const saveData = async ()=>{
        fetch('http://192.168.0.109/Fyp1api/api/Admin/Useracceptrequest', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                User_id:val.User_id,
                City:val.City,
                Area:val.Area,
                Block_name:selectvehi,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                alert(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
   
        //alert(val.User_id);
        //alert(val.City);
       // alert(val.Area);
       // alert(selectvehi);
    }
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <Provider>
                <Portal >
                    <Modal visible={visible} onDismiss={hideModal}
                        contentContainerStyle={containerStyle}
                    >
                        <Text>choose </Text>
                     
                        <Picker
                            itemStyle={styles.itemStyle}
                            style={styles.pickerStyle}
                            onValueChange={onValueChangevehi.bind(onValueChangevehi)}
                            selectedValue={selectvehi}
                        >
                            {
                                City.map((item, index) => {
                                    return(
                                        <Picker.Item label={item.Block_name} value={item.Block_name} key={index} />)
                                 } )

                            }
                        </Picker> 
                        
                        <Text style={styles.btn}
                            onPress={() => saveData()}>ADD</Text>

                    </Modal>
                </Portal>
                <TouchableOpacity
                    style={styles.floatingButton}

                    onPress={showModal}
                >
                    <Text style={styles.floatingButtonText}>+</Text>
                </TouchableOpacity>
            </Provider>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    floatingButton: {
        backgroundColor: '#4169e1',
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 30
    },
    bg: {
        height: '100%'
    },
    input: {
        backgroundColor: 'white',

    },
    btn: {
        backgroundColor: '#191970',
        height: 40,
        width: 80,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 25,
        borderRadius: 15,
        fontWeight: 'bold',
    },
    drop: {
        backgroundColor: 'white',
        marginBottom: 10,
        color: 'black',
        opacity: 0.7,
        shadowColor: 'white',
        elevation: 150,
        shadowOpacity: 0.4,
        width: 340,
        height: 50,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 70,
    },
    pickerStyle: {
        width: "96%",
        height: 20,
        color: "white",
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        marginTop: 33,
        marginRight: 15,
        backgroundColor: '#008b8b'

    },
    itemStyle: {
        fontSize: 10,
        fontFamily: "Roboto-Regular",
        color: "#007aff",
        marginTop: 50,

    },
})

export default AssignBlock;