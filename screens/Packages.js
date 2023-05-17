import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Card, Title, Button } from 'react-native-paper';
import React from 'react'
import { useState, useEffect } from 'react'
import bgImage from '../screens/Assets/images/peak2.jpg'
import { ImageBackground } from 'react-native'


const Packages = ({ navigation }) => {
  const [packages, setpackages] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const getpackages = async () => {
    try {
      const response = await fetch(
        global.ip+"Admin/Allpackages"
      );
      const myData = await response.json();
      setpackages(myData);
      setIsLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getpackages();
  }, []);

  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <ScrollView nestedScrollEnabled={true}>
      <View>

        <FlatList data={packages}
          renderItem={({ item }) => {
            return (
              <View>
                <Card style={styles.card}>
                  <Card.Content>
                    <Title>Package_id:   {item.Package_id}</Title>
                    <Title>Name:      {item.Package_name}</Title>
                    <Title>Recycle:   {item.Recycle_bag}</Title>
                    <Title>Non_Recycle   {item.Nonrecycle_bag}</Title>
                    <Title>Price:   {item.Price}</Title>
                   
                  </Card.Content>
                </Card>

              </View>
            )
          }} />
      </View>

      <View>
        <TouchableOpacity><Button style={styles.btn} onPress={() => navigation.navigate('Addpackages')}>Add packages</Button></TouchableOpacity>
        <TouchableOpacity><Button style={styles.btn}>update packages</Button></TouchableOpacity>
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
    marginTop: 30,
    padding: 5,
    width: 300,
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#7fffd4',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  card: {

    margin: 20,
    borderRadius: 15,

  },
})
export default Packages;