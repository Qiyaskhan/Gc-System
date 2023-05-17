import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Headers({navigation}){
    return(
        <View style={styles.Header}>
            <TouchableOpacity >
                <FontAwesome5 name={'bars'} style={styles.img} onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <Text style={styles.headertext}>
                Admin Dashboard</Text>
                <Text>_______________________________________________________</Text></View>
    )
}
const styles=StyleSheet.create({
    headertext:{
        fontWeight:'bold',
        fontSize:25,
        color:'#333',
        letterSpacing:1,
        alignSelf:'center',
       
    },
    img:{
        margin:4,
        padding:5,
        fontSize:35,
        
          
    }
    
})
