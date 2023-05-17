import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { Button, Card,Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllVehicals = () => {
    return (
        
            <View>
            <Card style={styles.card}>
                
                <Card.Content>
                    
                    <Title>Area:Rawalpindi</Title>
                    <Title>blockno:6th</Title>
                    <Title>Driver:asad          {icons()}</Title>
                    <Title>collector: moiz</Title>
                    <Title>collector: sufyan</Title>
                </Card.Content> 
            </Card>  
            
            
            </View>
    )
}
const icons=()=>{
    return(
        <Icon name='trash' style={styles.home} />
    )
}
const styles = StyleSheet.create({

    bg: {
        height: '100%'
    },
    card:{
        
        margin:20,
        borderRadius:15,
        
    },
    home: {
        color: '#b8860b',
        fontSize: 27,
        textAlign:'right',
        
        
    },
})
export default AllVehicals