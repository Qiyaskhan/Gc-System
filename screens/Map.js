import { ActivityIndicator, View, Text,Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
//import Geolocation from "react-native-geolocation-service";
import Geolocation from '@react-native-community/geolocation';
//import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const coordinates= [
    { latitude: 37.8025259, longitude: -122.4351431, name: 'Burger' },
    { latitude: 37.7946386, longitude: -122.421646, name: 'B' },
    { latitude: 37.7665248, longitude: -122.4165628,name: 'Burge' },
    { latitude: 37.7834153, longitude: -122.4527787, name: 'Burg' },
    { latitude: 37.7948105, longitude: -122.4596065, name: 'Bu' }
]

const Map = ({navigation}) => {

    const initialState = {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,


    }
    const [state,setstate]=useState(coordinates);
    const [curentPosition, setCurentPosition] = useState(initialState);
    const [markers, setmarkers] = useState([]);
    const [lat,setlat]=useState();
    const [long, setlong] = useState();
    useEffect(() => {

        Geolocation.getCurrentPosition(
            (position) => {

                // alert(JSON.stringify(position))
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
                //enableHighAccuracy: true,
                timeout: 20000,
            }

        );
      


    }, [])
    const myfun = async (e) => {
        // console.log(e.nativeEvent.coordinate);


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
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              cameraPosition={{ auto: true, zoom: 10 }}
              style={styles.map}
              showsUserLocation
              initialRegion={curentPosition}
              
          >
                <Marker coordinate={curentPosition}/>
                {/* <Polygon
                    coordinates={coordinates}
                    fillColor={'rgba(100, 100, 200, 0.3)'}
                /> */}
                {/* {
                    state.map((Items)=>{
                        <Marker.MapView coordinates={{latitude:Items.latitude,longitude:Items.longitude}} />
                     } )
                } */}
          </MapView>
          <View><Button title='addLocation'
                onPress={() => {navigation.navigate('Signup',{lat,long})}}/></View>
    </View>

    ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
    // function getlocation() {
        
    //     const lat = curentPosition.latitude;
    //     const long=curentPosition.longitude;
    //     let latlong = `${lat} ${long}`;
    //     console.log(latlong);
    //    // console.log(long);
    //      //return long,lat;
        
    // }
}


export default Map

const styles = StyleSheet.create({
    container:{
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