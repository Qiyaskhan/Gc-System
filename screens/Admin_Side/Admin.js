import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react';
import bgImage from '../Assets/images/peak2.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import Drawer from './Navigation/Sidebar';
const Admin = ({ navigation }) => {
  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <View style={styles.v1}>
        <View style={styles.container}>
          
          <View style={styles.collector} >
            <TouchableOpacity onPress={() => navigation.navigate('AllPendingUser')}>
              <Icon name='user' style={styles.usr} />
              <Text style={styles.txtcollect}>
                UserRequest</Text></TouchableOpacity>
          </View>
          <View style={styles.collector}><TouchableOpacity><Icon
            onPress={() => navigation.navigate('PackageRequest')} name='book' style={styles.Request} />
          </TouchableOpacity>
            <Text style={styles.txtcollect}>PackageRequest</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.collector}>
            <Icon onPress={() => navigation.navigate('AllBlock')} name='home'
              style={styles.usr} />
            <Text style={styles.txtcollect}>block</Text></View>
          <View style={styles.collector}><TouchableOpacity onPress={() => 
            navigation.navigate('AllDrivers')}>
            <Icon name='id-card' style={styles.driver} />
            <Text style={styles.txtcollect}>Driver</Text></TouchableOpacity></View>
        </View>
        <View style={styles.seccontainer}>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('AllVehical')} >
              <Icon name='car' style={styles.driver} />
              <Text style={styles.txtcollect}>Vehical</Text></TouchableOpacity></View>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('Allpackages')} >
              <Icon name='gift' style={styles.gift} />
              <Text style={styles.txtcollect}> Packages </Text></TouchableOpacity></View>
        </View>
        <View style={styles.seccontainer}>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('AllCollector')} >
              <Icon name='user' style={styles.home} />
              <Text style={styles.txtcollect}>AllStaff</Text></TouchableOpacity></View>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('AllComplains')} >
              <Icon name='warning' style={styles.warning} />
              <Text style={styles.txtcollect}>Complains</Text></TouchableOpacity></View>
        </View>
        <View style={styles.seccontainer}>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('AllCollector')} >
              <Icon name='user' style={styles.home} />
              <Text style={styles.txtcollect}>AllUser</Text></TouchableOpacity></View>
          <View style={styles.collector}>
            <TouchableOpacity onPress={() => navigation.navigate('AllComplains')} >
              <Icon name='user' style={styles.warning} />
              <Text style={styles.txtcollect}>Leave</Text></TouchableOpacity></View>
        </View>

        {/* <View style={styles.Alluser} >
          <TouchableOpacity onPress={() => navigation.navigate('AllUser')}>
            <Icon name='users' style={styles.usr} />
            <Text style={styles.txtcollect}>
              AllUser</Text></TouchableOpacity>
        </View> */}

      </View>

    </ImageBackground>

  )
}

const styles = StyleSheet.create({
 
  img: {
    margin: 4,
    padding: 5,
    fontSize: 35,


  },
  v1: {
    height: '100%',
    justifyContent: 'center',
    paddingBottom: 150
  },
  container: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-evenly'
  },
  collector: {
    height: 90,
    backgroundColor: '#dcdcdc',
    borderRadius: 30,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

  },
  txtcollect: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  seccontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15

  },
  usr: {
    color: 'gray',
    fontSize: 30,
    alignSelf: 'center'

  },
  Request: {
    color: 'black',
    fontSize: 30
  },
  driver: {
    color: '#4682b4',
    fontSize: 30,
    alignSelf: 'center'
  },
  gift: {
    color: '#c71585',
    fontSize: 30,
    alignSelf: 'center'
  },
  home: {
    color: '#b8860b',
    fontSize: 30,
    alignSelf: 'center'
  },
  warning: {
    color: 'red',
    fontSize: 30,
    alignSelf: 'center'
  },
  Alluser:{
    height: 90,
    backgroundColor: '#dcdcdc',
    borderRadius: 30,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    alignSelf:'center',
  }
})
export default Admin    
