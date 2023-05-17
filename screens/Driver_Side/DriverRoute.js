import { ActivityIndicator, View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Polyline } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
//import Geolocation from "react-native-geolocation-service";
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const coordinates = [
    { latitude: 37.8025259, longitude: -122.4351431, name: 'Burger' },
    { latitude: 37.7946386, longitude: -122.421646, name: 'B' },
    { latitude: 37.7665248, longitude: -122.4165628, name: 'Burge' },
    { latitude: 37.7834153, longitude: -122.4527787, name: 'Burg' },
    { latitude: 37.7948105, longitude: -122.4596065, name: 'Bu' }
]
const Map = ({ navigation }) => {
 const initialState = {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }
    const [state, setstate] = useState(coordinates);
    const [curentPosition, setCurentPosition] = useState(initialState);
    const [markers, setmarkers] = useState([]);
    const [lat, setlat] = useState();
    const [long, setlong] = useState();
    const [userid, setuserid] = useState();
    const[drivermarker,setdrivermarker]=useState([])
    const [isloading, setisloading] = useState(false);  
    useEffect(() => {
        getapimarkerdata();
        userID(); 
        Geolocation.getCurrentPosition(
            (position) => {
                const { longitude, latitude } = position.coords;
                setlat(latitude);
                setlong(longitude);
                setCurentPosition({
                    ...curentPosition,
                    latitude,
                    longitude,
                })
            },
            error => console.log(error.message),
            {
                timeout: 20000,
            }
        );
    }, [])
    function userID() {
        AsyncStorage.getItem('key').then((value) => {
            //alert(value);
            setuserid(value);
        });
    }
    const getapimarkerdata=async()=>{
        try {
           // alert(userid)
            const response = await fetch(global.ip + `Driver/usersgetlocation?User_id=5026`, {
                method: 'GET'
            })
            const apidata=await response.json();
            setdrivermarker(apidata);
            setisloading(true);
            
        } catch (error) {
            console.error(error);
        }
    }
    const myfun = async (e) => {
        const { latitude, longitude } = (e.nativeEvent.coordinate);
        setmarkers([
            ...markers, {
                latitude,
                longitude,
            }
        ])
    }
    return curentPosition.latitude ? (

        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} 
                cameraPosition={{ auto: true, zoom: 10 }}
                style={styles.map}
                showsUserLocation
                initialRegion={curentPosition}
            >
               <Marker coordinate={curentPosition} />               
                {
                    isloading==true?
               drivermarker.map(location => (
                    <Marker
                        coordinate={{
                           
                            latitude: parseFloat(location.Latitude),
                            longitude: parseFloat(location.Longitude)
                        }}
                        
                    />
                )) :null
            }              
                <Polyline
                    coordinates={[
                        { latitude: 33.6505, longitude: 73.0803 },
                        { latitude: 33.613156, longitude: 73.065067 },
                        // { latitude: 37.7665248, longitude: -122.4161628 },
                        // { latitude: 37.7734153, longitude: -122.4577787 },
                        // { latitude: 37.7948605, longitude: -122.4596065 },
                        // { latitude: 37.8025259, longitude: -122.4351431 }
                    ]}
                    strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
                    
                    strokeWidth={6}
                />
                
            </MapView>
            <View><Button title='addLocation'
                onPress={() => { navigation.navigate('Signup', { lat, long }) }} /></View>
        </View>

    ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />  
}
export default Map

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '90%',
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,

    },
})