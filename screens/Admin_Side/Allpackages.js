import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList,ToastAndroid } from 'react-native'
import { Card, Title, Button } from 'react-native-paper';
import React from 'react'
import { useState, useEffect } from 'react'
import bgImage from '../Assets/images/peak2.jpg'
import { ImageBackground } from 'react-native'


const Allpackages = ({ navigation }) => {
    const [Mypackages, setMypackages] = useState();
    const [isLoaded, setIsLoaded] = useState(true);
    const getpackages = async () => {
        try {
            const response = await fetch(
                global.ip+"Admin/Allpackages"
            );
            const myData = await response.json();
            setMypackages(myData);
           // setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);

        }}
    function deletePackage() {
        fetch(global.ip + `Admin/Removepkg?Package_name=${isLoaded}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to delete resource');
            })
            .then(() => {
                // resource deleted successfully
               console.log('deleted successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    }

      
    useEffect(() => {
        getpackages();
        deletePackage();
    }, []);
    

    return (
        <ImageBackground source={bgImage} style={styles.bg}>
           
            <ScrollView>
                <View>

                    <FlatList data={Mypackages}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Card style={styles.card}>

                                        <Card.Content>
                                            <Title style={styles.pkg}>package Details</Title>
                                            <Title>package_id: {item.Package_id}</Title>
                                            <Title>Package_name: {item.Package_name}</Title>
                                            <Title>Recycle:   {item.Recycle_bag}</Title>
                                            <Title>Non_Recycle   {item.Nonrecycle_bag}</Title>
                                            <Title>Price:   {item.Price}</Title>
                                           
                                        </Card.Content>
                                        <View style={styles.btn}>
                                            <Button onPress={() => { navigation.navigate('Addpackages')}}>ADD</Button>
                                            <Button onPress={()=>{deletePackage()
                                                ToastAndroid.show("Package Deleted Successfully", 2000);
                                                 }}>Remove</Button>
                                            
                                        </View>
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

    card: {

        margin: 20,
        borderRadius: 15,

    },
    btn: {

        width: '30%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    pkg:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold'
    }
})
export default Allpackages;