import { View, Text,StyleSheet,TouchableOpacity,Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const Admindetail=({navigation})=> {
    const app=()=>{
   navigation.navigate('Login')

    }
  return (
    <View>
          <View style={styles.container}>
           
              <View style={styles.collector} >
                 
                  <TouchableOpacity onPress={() => app({})}>
                      <Icon name='user' style={styles.usr} />
                      <Text style={styles.txtcollect}>
                          Users</Text></TouchableOpacity>
              </View>
              <View style={styles.collector}><Icon 
              onPress={()=>navigation.navigate('Login')}name='book' style={styles.Request} />
                  <Text style={styles.txtcollect}>Request</Text></View>
          </View>
          <View style={styles.container}>
              <View style={styles.collector}><Icon name='home' style={styles.usr} />
              <Text style={styles.txtcollect}>block</Text></View>
              <View style={styles.collector}><Icon name='id-card' style={styles.driver} />
              <Text style={styles.txtcollect}>Driver</Text></View>
          </View>
          <View style={styles.seccontainer}>
              <View style={styles.collector}><Icon name='car' style={styles.driver} />
              <Text style={styles.txtcollect}>Vehical</Text></View>
          <View style={styles.collector}>
                  <Icon name='gift' style={styles.gift} />
                  <Text style={styles.txtcollect}>package</Text></View>
          </View>
          <View style={styles.seccontainer}>
              <View style={styles.collector}>
                  <Icon name='trash' style={styles.home} />
                  <Text style={styles.txtcollect}>Collector</Text></View>
              <View style={styles.collector}>
                  <Icon name='warning' style={styles.warning} />
                  <Text style={styles.txtcollect}>Complains</Text></View>
          </View>
       
      </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
       margin: 15,
       justifyContent:'space-evenly'

    },
    collector: {
        height: 90,
        backgroundColor: '#dcdcdc',
        borderRadius: 30,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        
    },
    txtcollect: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    seccontainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin:15

    },
    usr: {
        color: 'gray',
        fontSize: 30,
        alignSelf: 'center'

    },
    Request:{
color:'black',
fontSize:30
    },
    driver:{
        color: '#4682b4',
        fontSize: 30,
        alignSelf: 'center'
    },
    gift:{
         color:'#c71585',
         fontSize: 30,
        alignSelf: 'center'
    },
    home:{
        color: '#b8860b',
        fontSize: 30,
        alignSelf: 'center'
    },
    warning:{
        color:'red',
        fontSize: 30,
        alignSelf: 'center'
    }

})
export default Admindetail