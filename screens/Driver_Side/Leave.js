import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Leave = () => {
  const [userid, setuserid] = useState();
 const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [isDatePickerVisible1, setIsDatePickerVisible1] = useState(false);
  const [Complaint, setComplaint] = useState('');
  const onDateChange = (event, selectedDate) => {
   // alert("hi")
    setIsDatePickerVisible(false);
    setDate(selectedDate || date);
  };
  const onDateChange1 = (event, selectedDate1) => {
    
    // alert("hi")
    setIsDatePickerVisible1(false);
    setDate1(selectedDate1 || date1);
  };
  function userID() {
    AsyncStorage.getItem('key').then((value) => {
     // alert(value);
      setuserid(value);
    });
  }
  useEffect(() => {
    userID();
  }, []);

  const SendLeaveFun=async()=>{
    const response = await fetch(global.ip + `Driver/Applyforleave?User_id=${userid}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify({

        From_date: date,
        To_date: date1,
        Reason: Complaint

      })


    })
    const json = await response.status;
    if (json === 200) {
      alert('Leave  Registered');

    }
    
  }

  return (
    <View>
      <Button
        title="Select Starting Date"
        onPress={() => setIsDatePickerVisible(true)}
      />
      {isDatePickerVisible && (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      )}
      <Text style={{color:'black',fontSize:20}}>Starting Date: {date.toString()}</Text>
      <Button
        title="Select ending date"
        onPress={() => setIsDatePickerVisible1(true)}
      />
      {isDatePickerVisible1 && (
        <DateTimePicker
          value={date1}
          mode="date"
          display="calendar"
          onChange={onDateChange1}
        />
      )}
      <Text style={{ color: 'black', fontSize: 20 }}>Ending Date: {date1.toString()}</Text>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Enter complains here "
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={Complaint}
          onChangeText={(Complaint) => { setComplaint(Complaint) }}
        />

      </View>
      <Button mode="contained"
        style={styles.btn} onPress={() => { SendLeaveFun() }}>
        Send Leave Request
      </Button>
    </View>
  )
}

export default Leave

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius: 15

  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",

  },
  btn: {
    borderRadius: 20,
    top: 25,
    left: 70,
    width: 270,
    padding: 4,

  },
})