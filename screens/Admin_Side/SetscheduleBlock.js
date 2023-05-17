import { StyleSheet, Text, View, ImageBackground,  } from 'react-native'
import React, { useState } from 'react';
import bgImage from '../Assets/images/peak2.jpg'
import CheckBox from '@react-native-community/checkbox';
import RadioForm from 'react-native-radio-form';
import { Button } from 'react-native-paper'



const SetscheduleBlock = ({route}) => {
    const { val } = route.params;
    const Block_id = val.Block_id;
    const City=val.City;
    const Block_name = val.Block_name;
    const Area = val.Area;
    const Days = val.Days;
    //const [value, setvalue] = React.useState('first');
    const [visible, setvisible] =useState(true);
    const [monday, setmonday] = useState(false)
    const [visibleThuesday, setvisibleThuesday] = useState(true);
    const [Thuesday, setThuesday] = useState(false)
    const [visibleWednesday, setvisibleWednesday] = useState(true)
    const [Wednesday, setWednesday] = useState(false)
    const [visibleThursday, setvisibleThursday] = useState(true)
    const [Thursday, setThursday] = useState(false)
    const [visibleFriday, setvisibleFriday] = useState(true)
    const [Friday, setFriday] = useState(false)
    const [visibleSaturday, setvisibleSaturday] = useState(true)
    const [Saturday, setSaturday] = useState(false)
    const [visibleSunday, setvisibleSunday] = useState(true)
    const [Sunday, setSunday] = useState(false)
    const items = [
        {label:"Morning",value:0},
        { label: "Evening", value: 2 }
    ]    
    const getData = async (City,Day,Area) => {
        try {
            fetch(global.ip + `AdminContinue/GetBlockSchedule?Day=${Day}&City=${City}&Area=${Area}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    alert(data);
                    // Do something with the data
                });
        } catch (error) {
            console.error(error);
        }
    };
    const getmondaydata=(mon)=>  {
    //  setmonday(monday)
    //  alert(mon)
     setvisible(false)
        getData(City,mon,Area)
    }
    const getThuesdaydata = (Thue) => {
        setvisibleThuesday(false)
        getData(City, Thue, Area)
    }
    const getWednesdaydata = (Wed) => {
        setvisibleWednesday(false)
        getData(City, Wed, Area)
    }
    const getThursdaydata = (Thur) => {
        setvisibleThursday(false)
        getData(City,Thur, Area)
    }
    const getFridaydata = (Fri) => {
        setvisibleFriday(false)
        getData(City,Fri, Area)
    }
    const getSaturdaydata = (Sat) => {
        setvisibleSaturday(false)
        getData(City,Sat, Area)
    }
    const getSundaydata = (Sun) => {
        setvisibleSunday(false)
        getData(City, Sun, Area)
    }
  return (
      <ImageBackground source={bgImage} style={styles.bg}>
    <View style={{margin:10}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Choose Days</Text>
           
             <View style={{flexDirection:'row'}}><Text>monday</Text>
                  <CheckBox
                      disabled={false}
                      value={monday}
                      onValueChange={(monday) => 
                      getmondaydata("monday")  
                    }
                  /></View>
              
              <View style={{ flexDirection: 'row' }}><Text>Thuesday</Text>
                  <CheckBox
                      disabled={false}
                      value={Thuesday}
                      onValueChange={(Thuesday) => 
                        getThuesdaydata("Thuesday")}
                      /></View> 
            
              <View style={{ flexDirection: 'row' }}><Text>Wednesday</Text>
                  <CheckBox
                      disabled={false}
                      value={Wednesday}
                      onValueChange={(Wednesday) =>
                        getWednesdaydata("Wednesday")}
                      /></View> 
              
              <View style={{ flexDirection: 'row' }}><Text>Thursday</Text>
                  <CheckBox
                      disabled={false}
                      value={Thursday}
                      onValueChange={(Thursday) => 
                          getThursdaydata("Thursday")}
                      /></View> 
             
              <View style={{ flexDirection: 'row' }}><Text>Friday</Text>
                  <CheckBox
                      disabled={false}
                      value={Friday}
                      onValueChange={(Friday) => 
                          getFridaydata("Friday")}
                      /></View> 
              
              <View style={{ flexDirection: 'row' }}><Text>Saturday</Text>
                  <CheckBox
                      disabled={false}
                      value={Saturday}
                      onValueChange={(Saturday) => 
                    getSaturdaydata("Saturday")}
                      /></View> 
            
              <View style={{ flexDirection: 'row' }}><Text>Sunday</Text>
                  <CheckBox
                      disabled={false}
                      value={Sunday}
                      onValueChange={(Sunday) => 
                          getSundaydata("Sunday")}
                      /></View>  
              <View style={styles.btn}>
                <Text style={{color:'black',fontWeight:'bold',
           fontSize:20 }}>Morning</Text>
                  {/* <RadioButtonRN
                      data={data}
                      selectedBtn={(e) => console.log(e)}
                      icon={
                          <Icon
                              name="check-circle"
                              size={25}
                              color="#2c9dd1"
                          />}
                  /> */}
              {/* <RadioForm radio_prop={items}initail={value} onPress={(value)=>setvalue
              (value)}/>   */}
                  <RadioForm
                      style={{ width: 350 - 30 }}
                      dataSource={items}
                      itemShowKey="label"
                      itemRealKey="value"
                      circleSize={16}
                      initial={1}
                      formHorizontal={true}
                      labelHorizontal={true}
                      onPress={(item) =>(item)}
                  />
                  <Button mode="contained" onPress={() =>
                      getData()}
                      >
                      SetscheduleBlock
                  </Button>
              </View>
                  
         
    </View>
  
          </ImageBackground>
  )
}

export default SetscheduleBlock

const styles = StyleSheet.create({
    btn:{
flexDirection:'row',



    },
    txt:{
        color:'black',
        
      
    },
    bg:{
        height:'100%'
    }
})