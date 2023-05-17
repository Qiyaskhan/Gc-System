import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Alert, TouchableOpacity, } from 'react-native'
import { Button, } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import bgImage from '../screens/Assets/images/peak2.jpg'
import React from 'react'
import Connstrants from '../component/Connstrants';


export default function Signup({ navigation, route }) {
  //const { curentPosition}=route.Params;
 const { lat, long } = route.params;

  const [Name, setName] = useState("");
  const [User_Name, setUser_Name] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_no, setPhone_no] = useState("");
  const [Street, setStreet] = useState("");
  const [House_No, setHouse_No] = useState("");
  const [Users, setUsers] = useState('user');
  const [SelectedArea, setselectedArea] = useState('Area');
  const [SelectedCity, setselectedCity] = useState('City');
  const [City, setCity] = useState([]);
  const [bycity, setbycity] = useState();
  const [Area, setArea] = useState([]);

  const Add_User = async () => {
    //alert(Name);
    //alert();
    const response = await fetch(`http://192.168.0.109/Fyp1api/api/User/Signup?City=${SelectedCity}&Area=${SelectedArea}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({

        Name: Name,
        User_name: User_Name,
        Pasword: Password,
        Email: Email,
        Phone_no: Phone_no,
        Street: Street,
        House_no: House_No,
        Longitude: lat,
        Latitude: long,
        Utype: Users
      })


    })
    const json = await response.status;
    if (json === 200) {
      alert('Employee data entered successfully');
      
    }

 



  }
  // Dropdown Function
  const getdropdownlist = async () => {

    try {
      const response = await fetch(
        global.ip+"Admin/Getcity"
      );
      const myData = await response.json();
      // alert(myData);
      setCity(myData);

      //setusers(myData);
    } catch (error) {
      console.log(error);

    }
  };
  const getAreaDropdown = async (value) => {

    //alert(SelectedCity)
    try {
      const response = await fetch(
        global.ip + `Admin/getarea?city=${value}`
      );
      const myData = await response.json();
      // alert(myData);
      setArea(myData);

      //setusers(myData);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getdropdownlist();
   
    // alert(curentPosition.latitude)
  }, []);
  const onValueChangeCat = (value) => {

    setselectedCity(value);
    getAreaDropdown(value);
  }
  return (

    <ImageBackground source={bgImage} style={styles.bg}>
      <View style={styles.txt}>
        <Image source={require('../screens/Assets/icons/waste.jpg')}
          style={styles.logo}></Image>

        <Text style={styles.con} >Signup</Text>
        <ScrollView>
          <TextInput
            placeholder='Name'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={Name}
            onChangeText={(actualData) => setName(actualData)}
          />

          <TextInput
            placeholder='User_Name'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={User_Name}
            onChangeText={(actualData) => setUser_Name(actualData)}
          />
          <TextInput
            placeholder='Enter your password....'
            style={styles.inputt}
            secureTextEntry
            placeholderTextColor="black"
            Value={Password}
            onChangeText={(actualData) => setPassword(actualData)} />

          <TextInput
            placeholder='Email'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={Email}
            onChangeText={(actualData) => setEmail(actualData)} />
          <TextInput
            placeholder='Phone_no'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={Phone_no}
            onChangeText={(actualData) => setPhone_no(actualData)} />
          <Text style={{ color: 'black', margin: 5 }}>Select City</Text>
          <Picker

            style={styles.drop}
            selectedValue={SelectedCity}
            onValueChange={onValueChangeCat.bind(onValueChangeCat)}

          >
            {
              City.map((item,index) => (
                <Picker.Item label={item.City} value={item.City} key={index} />
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

          <TextInput
            placeholder='Street_No'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={Street}
            onChangeText={(actualData) => setStreet(actualData)}
          />
          <TextInput
            placeholder='House_No'
            style={styles.inputt}
            placeholderTextColor="black"
            Value={House_No}
            onChangeText={(actualData) => setHouse_No(actualData)}
          />
          <Button mode="contained"
            onPress={() =>
              navigation.navigate('Map')}
            style={styles.btn}>
            Add_Location
          </Button>

        </ScrollView>

        <View style={{ flexDirection: 'row', alignItems: 'center', height: 90 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 70, textAlign: 'center', color: 'gray' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
        <Button mode="contained"
          onPress={() =>
            
            Add_User()}

          style={styles.btn}>

          Registerd Now
        </Button>
        <Text style={{ alignSelf: 'flex-start', color: 'gray', fontSize: 15 }} onPress={() =>
          console.log(Ipaddress)}>
          Aleardy have an Accound? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}><Text style={{ color: 'black', fontSize: 15 }}>Login</Text>
        </TouchableOpacity>

      </View>



    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  inputt: {
    width: 340,
    height: 40,
    padding: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    // borderBottomStartRadius: 30,
    // borderBottomRightRadius: 30,
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
    backgroundColor: 'white',
    color: 'black',
    opacity: 0.7,
    shadowColor: 'black',
    elevation: 150,
    shadowOpacity: 0.4,
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
  },
  txt: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  con: {
    fontWeight: 'bold',
    fontSize: 24,
    //color:'green'
    fontStyle: 'italic',
    color: 'black'
  },


  btn: {
    borderRadius: 20,
    // left: 70,
    marginBottom: 10,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  logo: {
    height: 70,
    width: 100,
    //backgroundColor: 'green',
    borderRadius: 50,

  }
})

