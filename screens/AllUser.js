import { View, Text, StyleSheet, Button, ImageBackground, FlatList,  } from 'react-native'
import React,{useState,useEffect} from 'react'
import bgImage from '../screens/Assets/images/peak2.jpg'
import Connstrants from '../component/Connstrants';
import AllUserCard from '../component/AllUserCards/AllUserCard';
//import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const AllUser =({navigation})=> 
{
  const ip = Connstrants.Ipaddress

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
  const [users, setusers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const getusers = async () => {
    //alert(ip);
    try {
      const response = await fetch(
        global.ip+"Admin/Allusers"
      );

     // alert(JSON.stringify(response));
     //console.log("hin i sm new");
    
      const myData = await response.json();
      //console.log("hin  new");
     // console.log(myData);
    //  alert(JSON.stringify(myData));
      setusers(myData);
     
      //alert('alert')
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getusers();
  }, []);

    
  return (
    <ImageBackground source={bgImage} style={{height:'100%'}}>
    
     
        <View style={{width:'90%',height:180,marginLeft:'5%'}}>
          
        {
          
           users.map(Items=>{
            return(
              <AllUserCard item={Items} />
            )
           })
            
         
         
        }
        </View>
   
    </ImageBackground>

  )
}


const styles=StyleSheet.create({

search:{
  backgroundColor:'white',
  margin:20,
    borderBottomStartRadius: 30,
    borderBottomRightRadius: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
}
  
});
export default AllUser