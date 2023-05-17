import * as React from 'react';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal, Portal, Text, Provider, TextInput,Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, ImageBackground, View,ToastAndroid } from 'react-native'
import bgImage from '../Assets/images/peak2.jpg'

const AddCollector = () => {
    const [visible, setVisible] = React.useState(false);
    const [name, setname] = React.useState("");
    const [uname, setuname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [phone, setphone] = React.useState("");
    const [password, setpassword] = React.useState("");
    //const [Utype, setUtype] = React.useState("");
    const [SelectedCity, setselectedCity] = useState('City');
    const [City, setCity] = useState([]);
    const [Area, setArea] = useState([]);
    //const[collector,setcollector]=useState('');
    const [SelectedArea, setselectedArea] = useState('Area');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const Add_Collector = async () => {
        const response = await fetch(global.ip + "User/Signup?City=rwp&Area=6th-road", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                User_name: uname,
                Pasword: password,
                Email: email,
                Phone_no: phone,
                Area: SelectedArea,
                City: SelectedCity,
                Utype:"collector"
               
            })


        })
        const reg = async () => {
            const json = await response.status;
            if (json === 200) {
                alert('you are registered successfully');

            }
        }


    }
    //////////dropdown list///////////
    const getdropdownlist = async () => {

        try {
            const response = await fetch(
                global.ip+"Admin/Getcity"
            );
            const myData = await response.json();

            setCity(myData);
            ;
        } catch (error) {
            console.log(error);

        }
    };
    const getAreaDropdown = async (value) => {


        try {
            const response = await fetch(
                global.ip + `Admin/getarea?city=${value}`
            );
            const myData = await response.json();

            setArea(myData);
            
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        getdropdownlist();
        Add_Collector();
    }, []);
    const onValueChangeCat = (value) => {

        setselectedCity(value);
        getAreaDropdown(value);
    }


    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <Provider>
                <Portal >
                    <Modal visible={visible} onDismiss={hideModal}
                        contentContainerStyle={containerStyle}
                    >
                        <TextInput
                            label="Name"
                            value={name}
                            onChangeText={name => setname(name)}
                            style={styles.input} />
                        <TextInput
                            label="User Name"
                            value={uname}
                            onChangeText={uname => setuname(uname)}
                            style={styles.input} />
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={email => setemail(email)}
                            style={styles.input} />
                        <TextInput
                            label="Phone no"
                            value={phone}
                            onChangeText={phone => setphone(phone)}
                            style={styles.input} />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={password => setpassword(password)}
                            style={styles.input}
                            secureTextEntry
                            right={<TextInput.Icon icon="eye" />} />
                        {/* <TextInput
                            label="type"
                            value={Utype}
                            onChangeText={Utype => setUtype(Utype)}
                            style={styles.input} /> */}
                        <Text style={{ color: 'black', margin: 5 }}>Select City</Text>
                        <Picker

                            style={styles.drop}
                            selectedValue={SelectedCity}
                            onValueChange={onValueChangeCat.bind(onValueChangeCat)}

                        >
                            {
                                City.map((item,C) => (
                                    <Picker.Item label={item.City} value={item.City} key={C} />
                                )
                                )
                            }
                        </Picker>
                        <Text style={{ color: 'black', margin: 5 }}>Select Area</Text>
                        <Picker

                            style={styles.drop}
                            selectedValue={SelectedArea}
                            onValueChange={(itemVal) => {
                                setselectedArea(itemVal);

                            }}
                        >
                            {
                                Area.map((item) => (
                                    <Picker.Item label={item.Area} value={item.Area} key={item.index} />
                                )
                                )
                            }
                        </Picker>
                        <Text style={styles.btn}
                            onPress={() => { 
                                ToastAndroid.show('Collector Add Sucessfully',2000);
                                (Add_Collector()) }}>ADD</Text>

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
})

export default AddCollector;