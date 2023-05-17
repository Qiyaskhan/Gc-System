
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, FlatList, ScrollView,Alert } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import bgImage from '../Assets/images/peak2.jpg'
import Searchbar from '../../component/Searchbar'
import { useState, useEffect } from 'react'
const Request = () => {
    
    const [Package_id, setPackage_id] = useState('')
     const [up_id,setup_id]=useState("")
     const[recycle_bag,setrecycle_bag]=useState()
     const[non_Recycle,setnon_Recycle]=useState()
    const getpackages = async () => {
        try {

            const response = await fetch(
                global.ip + "/Admin/AllpkgRequests"
            );
            const myData = await response.json();
            myData.map(item=>{
                //alert(item.Recycle_bag);
                setup_id(item.Up_id);
                setrecycle_bag(item.Recycle_bag);
                setnon_Recycle(item.Nonrecycle_bag);

            })
            setPackage_id(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);
        }
    };
    /////generate Tokens///////
   const GenerateTokens= async()=>{
      
  
       const response = await fetch(global.ip + "Admin/GenerateTokens", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({

                Up_id: up_id,
                Recycle_bag: recycle_bag,
                Nonrecycle_bag: non_Recycle,
               
            })


        })
       const json = await response.status;
       if (json === 200) {
           alert('Token store  success fully');
          
       }
       
}
    
    useEffect(() => {
        getpackages();
    }, []);
    const  customAlert=()=>{
        Alert.alert(
            'Token Genratation',
            'Are your Sure to Genrate Token ',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => GenerateTokens() },
            ],
            { cancelable: false },
        );
    }
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <FlatList data={Package_id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Paragraph>User_name=        {item.User_name}</Paragraph>
                                    <Paragraph>Name=           {item.Package_name}</Paragraph>
                                    <Paragraph>Recycle=        {item.Recycle_bag}</Paragraph>
                                    <Paragraph>Non_Recycle=     {item.Nonrecycle_bag}</Paragraph>
                                    <View style={styles.btnview}>
                                        <Button style={styles.btn}
                                            onPress={() =>
                                                customAlert()} >Accept</Button>
                                        <Button style={styles.btn}>Delete</Button>
                                    </View>
                                </Card.Content>
                            </Card>

                        </View>
                    )
                }} />
            <View></View>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    bg: {
        height: '100%'
    },
    card: {
        margin: 40,
        borderRadius: 40,
    },
    btnview: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'space-evenly',
    },
    btn: {
        borderRadius: 30,
        backgroundColor: '#7fffd4',
        width: 70,
    },
})
export default Request