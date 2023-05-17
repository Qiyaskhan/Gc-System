import { View, Text,StyleSheet,ImageBackground, TouchableOpacity } from 'react-native'
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import bgImage from '../Assets/images/peak2.jpg'

const Collector=({navigation})=> 
    {
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ margin: 10, alignSelf: 'center', }}>
                <View style={styles.container}>
                    <View style={styles.collector} >
                        <TouchableOpacity onPress={() => navigation.navigate('Leave')}>
                            <Icon name='user' style={styles.usr} />
                            <Text style={styles.txtcollect}>
                                Apply for leave</Text></TouchableOpacity>
                    </View>
                    <View style={styles.collector} >
                        <TouchableOpacity onPress={() => navigation.navigate('AllUser')}>
                            <Icon name='comment'  style={{
                            color: '#00bfff', fontSize: 30,
                            alignSelf: 'center',}} />
                            <Text style={styles.txtcollect}>
                                Garbage_Request</Text></TouchableOpacity>
                    </View>
            </View><View style={{alignItems:'center'}}>
                <View style={styles.collector}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')} >
                        <Icon name='exclamation-triangle' style={{
                            fontSize: 30,
                            alignSelf: 'center',
                            color: 'red'
                        }} />
                        <Text style={styles.txtcollect}>Scan_Token </Text></TouchableOpacity></View>
            </View>

            
        </View>
       
      </ImageBackground>
    )}
const styles = StyleSheet.create({
   
   bg:{
    height:'100%'
   },
    usr: {
        color: 'gray',
        fontSize: 30,
        alignSelf: 'center'
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
    container: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-evenly'
    },
    txtcollect:{
        color:'black'
    }
  
});

export default Collector