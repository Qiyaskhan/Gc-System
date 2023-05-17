import { View, Text, StyleSheet, ImageBackground, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button, } from 'react-native-paper';
import bgImage from '../screens/Assets/images/peak2.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Connstrants from '../component/Connstrants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }) => {
  const ip = Connstrants.Ipaddress
  const [UserName, setUserName] = useState("");
  const [Pasword, setPasword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const LoginUser = async () => {
    try {
      const response = await fetch(global.ip +'User/Login?User_name=' + UserName + '&Pasword=' + Pasword);
      const responseJson = await response.json();
      const User_id = responseJson[0].User_id;
      const Utype = responseJson[0].Utype;
      alert(responseJson[0].Utype)
      AsyncStorage.setItem('key',
        JSON.stringify(User_id));

      if (Utype=="admin") {
        navigation.navigate("Admin");
      }
      if (Utype=="user") {
        navigation.navigate('Userdashboard');
      }
      if (Utype=="collector") {
        navigation.navigate('CollectorDashboard');
      }
      if (Utype=="driver") {
        navigation.navigate("Driverdashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (

    <ImageBackground source={bgImage} style={styles.bg}>
      <View style={styles.container}>
        <FontAwesome5 name='user-lock' style={styles.usr} />
        <Text style={styles.login}>Login </Text>
        <TextInput
          placeholder={'Username'}
          style={styles.input}
          autoCorrect={false}
          placeholderTextColor="gray"
          Value={UserName}
          onChangeText={(actualData) => setUserName(actualData)} />
            {formErrors.name && <Text>{formErrors.UserName}</Text>}

        <TextInput
          placeholder='password'
          secureTextEntry
          style={styles.input}
          placeholderTextColor="gray"
          autoCorrect={false}
          Value={Pasword}
          onChangeText={(actualData) => setPasword(actualData)}
        />
        {formErrors.password && <Text>{formErrors.Pasword}</Text>}
        <Button mode="contained"
          onPress={() =>{
            LoginUser();
          }}
          style={styles.btn}>
          Login
        </Button>
        <Text style={{ marginTop: 30, color: 'gray', alignSelf: 'flex-start' }} >
          Forget Password?
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 70, textAlign: 'center', color: 'black' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>
      <Text style={styles.ftr} onPress={() =>
        navigation.navigate('Signup')}>
        Don't have an account? Signup
      </Text>
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
  login:
  {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 45,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 20,
    top: 25,
    left: 70,
    width: 140,
    padding: 2.5
  },

  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usr: {
    fontSize: 80,
    color: '#2f4f4f'
  },
  ftr: {
    fontSize: 18,
    marginTop: 30,
    color: 'black',

  },
})
export default Login
