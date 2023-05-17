import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import  { useState, useEffect } from 'react'
import AllGarbageRequest from '../../component/AllGarbageRequest/AllGarbageRequest';

const UserGrabage_request = () => {
  const [UserGrabage_request, setUserGrabage_request] = useState([]);
  const getGrabage_request = async () => {
    try {
      const response = await fetch
        (global.ip + "Admin/AllGarbageRequests");
      const myData = await response.json();
      setUserGrabage_request(myData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGrabage_request();
  }, []);
  return (
 
    <View style={{ width: '90%', height: "100%", marginLeft: '5%' }}>
      {
        UserGrabage_request.map(Items => {
          return (
            <View>
            <AllGarbageRequest item={Items} key={Items.Garbage} /></View>
          )
        })
      }
      </View> 
  )
}


const styles = StyleSheet.create({
  bg: {
    height: '100%',
  },
})
      export default UserGrabage_request;