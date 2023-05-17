import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
const AllPendingUserCard = (props) => {
    const navigation = useNavigation();
    const val = props.item;
    return (
        
        <View style={[{ margin: 10, height: '85%', backgroundColor: 'white', borderRadius: 5 },
         styles.shadowstyle]}>
           
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20,
             fontWeight: 'bold' }}>Pending Users</Text>
            <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: 'black' }}>Name:   {props.item.User_id}</Text>
                <Text style={{ color: 'black' }}>Name:   {props.item.User_name}</Text>
                <Text style={{ color: 'black' }}>City:      {props.item.City} </Text>
                <Text style={{ color: 'black' }}>Area :    {props.item.Area}</Text>
                <Text style={{ color: 'black' }}>Utype:    {props.item.Utype} </Text>
                <View style={styles.btn}>
                    <Button
                        onPress={() => {
                            navigation.navigate('AssignBlock',{val})
                        }}>Accept</Button>
                    <Button>Remove</Button>
                </View> 
                </View>
        </View>
    )
}

export default AllPendingUserCard

const styles = StyleSheet.create({
    shadowstyle: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'green',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,

    },
    btn: {

        width: '30%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    
})