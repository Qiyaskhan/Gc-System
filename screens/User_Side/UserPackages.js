import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, FlatList,ScrollView } from 'react-native'
import { Card, Title, Button } from 'react-native-paper';
import { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import { ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserPackages = ({ navigation }) => {
    const [packages, setpackages] = useState();
    const [myUserId, setMyVariable] = useState(1);
    // const [isLoaded, setIsLoaded] = useState(true);
    var user_ID;
    const getpackages = async () => {
        try {
            const response = await fetch(
                global.ip+"Admin/Allpackages"
            );
            const myData = await response.json();
            setpackages(myData);
            setIsLoaded(false);

        } catch (error) {
            console.log(error);
        }
    };
    function userID() {
        AsyncStorage.getItem('key').then((value) => {

            setMyVariable(Number.parseInt(value))
        });
    }
    useEffect(() => {
        getpackages();
        userID();
    }, []);
    const My_packages = (Package_id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            User_id: myUserId,
            Package_id: Package_id
        });
        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(global.ip+"User/Subscribepkg", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <ScrollView>
            <View>
                <FlatList data={packages}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Card style={styles.card}>
                                    <Card.Content>
                                        <Title>  {item.Package_name}</Title>
                                        <Title>Recycle_bag:   {item.Recycle_bag}</Title>
                                        <Title>Non_Recycle   {item.Nonrecycle_bag}</Title>
                                        <Title>Price:   {item.Price}</Title>
                                        <TouchableOpacity><Button style={styles.btn} onPress={() => {

                                            console.log(My_packages(item.Package_id,)
                                            )
                                            ToastAndroid.show("package request sent", 2000)
                                        }}>Buy</Button></TouchableOpacity>
                                    </Card.Content>
                                </Card>
                            </View>
                        )
                    }} />
            </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({

    bg: {
        height: '100%'
    },
    btn: {

        borderRadius: 30,
        backgroundColor: '#7fffd4',
        width: 100,
        alignSelf: 'center'

    },
    card: {

        margin: 20,
        borderRadius: 15,

    },
})
export default UserPackages;
