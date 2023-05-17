import { Text, View, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import bgImage from '../Assets/images/peak2.jpg'
const styles = StyleSheet.create({

    bg: {
        height: '100%'
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
        justifyContent: 'space-evenly',
        
    },

})

export default class Driverdashboard extends Component {
    handlePress = () => {
        const { navigation } = this.props;
        navigation.navigate('DriverRoute');
    }
    ApplyForLeave = () => {
        const { navigation } = this.props;
        navigation.navigate('Leave');
    }
  render() {
    return (
        <ImageBackground source={bgImage} style={styles.bg}>
            <View style={{ margin: 10, alignSelf: 'center',justifyContent:'center',height:'60%' }}>
                <View style={styles.container}>
                    <View style={styles.collector} >
                        <TouchableOpacity onPress={this.handlePress}>
                            <Icon name='map' style={styles.usr} />
                            <Text style={{color:'black'}}>
                                My Working Area</Text></TouchableOpacity>
                    </View>
                    <View style={styles.collector} >
                        <TouchableOpacity onPress={this.ApplyForLeave}>
                            <Icon name='book' style={{
                                color: '#00bfff', fontSize: 30,
                                alignSelf: 'center',
                            }} />
                            <Text style={{ color: 'black' }}>
                            Apply for leave</Text></TouchableOpacity>
                    </View>
                </View>
                 </View>

        </ImageBackground>
    )
  }
    
}