import { View, Text, StyleSheet, TextInput, ImageBackground, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Button, } from 'react-native-paper';
import bgImage from '../Assets/images/peak2.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Connstrants from '../../component/Connstrants';


const Addpackages=()=> {
    const ip = Connstrants.Ipaddress
    const [Package_name, setPackage_name] = useState("");
    const [Recycle_bag, setRecycle_bag] = useState("");
    const [Nonrecycle_bag, setNonrecycle_bag] = useState("");
    const [price, setprice] = useState("");
    const [Users, setUsers] = useState({});
     
         const Add_packages= async()=> {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            Package_name: Package_name,
            Recycle_bag: Recycle_bag,
            Nonrecycle_bag: Nonrecycle_bag,
            Price:price 
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

             fetch(global.ip + "Admin/Addpkg", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
         
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={styles.container}>
                <FontAwesome5 name='car' style={styles.usr} />
                <Text>AddPackages</Text>
                <TextInput
                    placeholder={'Add_Package Name'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={Package_name}
                    onChangeText={(actualData) => setPackage_name(actualData)}
                />
                <TextInput
                    placeholder={'Enter Recycle bag'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={Recycle_bag}
                    onChangeText={(actualData) => setRecycle_bag(actualData)}
                />
                <TextInput
                    placeholder={'enter Non_Cycle bag'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={Nonrecycle_bag}
                    onChangeText={(actualData) => setNonrecycle_bag(actualData)}
                />
                <TextInput
                    placeholder={'Enter price'}
                    style={styles.input}
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    Value={price}
                    onChangeText={(actualData) => setprice(actualData)}
                />
                <Button mode="contained"
                    onPress={() =>{
                        ToastAndroid.show("package Added sucessfully", 2000)
                        Add_packages()}}
                    style={styles.btn}>
                    Add_packages
                </Button>
            </View>
        </ImageBackground>
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
        borderColor: 'gray',
        borderWidth: 2,
        backgroundColor: '#dcdcdc',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: 'gray'
    },
    usr: {
        fontSize: 80,
        color: '#2f4f4f'
    },
})
export default Addpackages