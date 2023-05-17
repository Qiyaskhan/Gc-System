import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button} from 'react-native-paper';
import bgImage from '../screens/Assets/images/peak2.jpg'
const Home = ({navigation}) => {
  return (
    <ImageBackground source={bgImage}  style={styles.bg1}>
    <View style={styles.bg}>
      <View>
          <Text style={styles.txt2}>{'WellCome \n To \n Garbage Collection'}</Text>
          </View>
      <Button  mode="contained"  onPress={() =>
      navigation.navigate('Login')} style={styles.btn}>
        LOGIN
      </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Map') }style={styles.btn}>
        Sign Up
      </Button>
    </View>
    </ImageBackground >
  )
}
const styles = StyleSheet.create({

  txt2:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:215,
    padding:10,
    color:'black',
  },
  
  btn:{
    marginTop:30,
    padding:5,
    margin:18,
    width:300,
    borderRadius:30,
    backgroundColor:'#32cd32',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    
    
  },
  bg1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      },
      bio:{
        fontWeight:'bold',
        color:'#353538'
      },
      bg:{
        margin:190,
      }
  
})
export default Home
