import * as React from 'react';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal, Portal, Text, Provider, TextInput, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, ImageBackground, View, ToastAndroid } from 'react-native'
import bgImage from '../Assets/images/peak2.jpg'
import Dropdown from '../../component/Dropdown';

const AddBlock = () => {
    const [visible, setVisible] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [Area, setArea] = React.useState("");
    const [Block, setBlock] = React.useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [SelectedCity, setselectedCity] = useState('City');
    const [City] = useState(
        [
            'Peshawer',
            'Islamabad',
            'rawalpindi',
            'lahore',
            'karachi',
            'FaisalAbad',
            'rwp'
        ].sort()
    );
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const Add_Block = async () => {
       
        const response = await fetch(global.ip + "Admin/Addblock", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                City:SelectedCity,
                Area:Area,
                Block_name: Block,
            })
            


        })
        const reg = async () => {
            const json = await response.status;
            if (json === 200) {
                alert('you are registered successfully');

            }
        }


    }

   
    
    useEffect(() => {
        Add_Block();
    }, []);
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <Provider>
                <Portal >
                    <Modal visible={visible} onDismiss={hideModal}
                        contentContainerStyle={containerStyle}
                    >
                        <Text style={{ color: 'black', margin: 5 }}>Select City</Text>
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
                        <TextInput
                            label="Area Name"
                            value={Area}
                            onChangeText={Area => setArea(Area)}
                            style={styles.input} />
                        <TextInput
                            label="Block Name"
                            value={Block}
                            onChangeText={Block => setBlock(Block)}
                            style={styles.input} />
                        <Text style={styles.btn}
                            onPress={() => {
                                ToastAndroid.show('Block Add Sucessfully', 2000);
                                (Add_Block())
                            }}>ADD</Text>

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
        shadowColor: 'black',
        elevation: 150,
        shadowOpacity: 0.4,
        width: 340,
        height: 40,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 70,
        alignSelf: 'center'
    },
})

export default AddBlock;