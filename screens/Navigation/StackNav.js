import { View, Text, } from 'react-native'
// import React from 'react'
import * as React from 'react';
//import { createStackNavigator } from 'react-navigation-stack';
//import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Signup';
import Home from '../Home';
import Admin from '../Admin_Side/Admin';
import Collector from '../Collector_Side/CollectorDashboard'
import AllUser from '../AllUser';
import Vehical from '../Admin_Side/AllVehical'
import PackageRequest from '../Admin_Side/PackageRequest'
import AddBlock from '../Admin_Side/AddBlock';
import Complains from '../User_Side/Complains';
import Advehical from '../Admin_Side/Advehical';
import Addpackages from '../Admin_Side/Addpackages';
import Userdashboard from '../User_Side/Userdashboard';
import UserPackages from '../User_Side/UserPackages'
import Allpackages from '../Admin_Side/Allpackages';
import Scan_Token from '../Collector_Side/TokenGenerate';
import Driverdashboard from '../Driver_Side/Driverdashboard';
import Map from '../Map'
import ScanScreen from '../Collector_Side/ScanScreen';
import CustomButton from '../../component/CustomButton';
import AllCollector from '../Admin_Side/AllCollector';
import AddCollector from '../Admin_Side/AddCollector';
import AllDrivers from '../Admin_Side/AllDrivers';
import MyModal from '../../component/Modal';
import AddDrivers from '../Admin_Side/AddDriver';
import UserGrabage_request from '../Admin_Side/UserGrabage_request';
import AllPendingUser from '../Admin_Side/AllPendingUser';
import UserMyPackages from '../User_Side/UserMyPackages';
import SendGarbage_request from '../User_Side/SendGarbage_request';
import AllComplains from '../Admin_Side/AllComplains';
import AllToken from '../AllToken';
import DriverRoute from '../Driver_Side/DriverRoute';
import AllBlock from '../Admin_Side/AllBlock'
import SetscheduleBlock from '../Admin_Side/SetscheduleBlock';
import AssignBlock from '../Admin_Side/AssignBlock';
import Leave from '../Driver_Side/Leave';
global.ip ='http://192.168.0.109/Fyp1api/api/';
const StackNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Admin'>
            {/* //////////registration Screen////////////// */}
            <Stack.Screen name="Login" component={Login} options={{ title: 'LOGIN', }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={Map} />
            {/* //////////////Admin Side screen///////////////////// */}
            <Stack.Screen name="Allpackages" component={Allpackages} />
            <Stack.Screen name="Addpackages" component={Addpackages} />
            <Stack.Screen name="Admin" component={Admin} options={{ title: 'Admin Dashboard', headerShown: false, headerTitleAlign: 'center', }} />
            <Stack.Screen name="AllUser" component={AllUser} options={{ headerShown: false }} />
            <Stack.Screen name="AllPendingUser" component={AllPendingUser} />
            <Stack.Screen name="AllVehical" component={Vehical} options={{ title: 'All Vehical', headerTitleAlign: 'center' }} />
            <Stack.Screen name="Advehical" component={Advehical} options={{ title: 'Advehical', headerTitleAlign: 'center' }} />
            <Stack.Screen name="PackageRequest" component={PackageRequest} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="AddBlock" component={AddBlock} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="AllBlock" component={AllBlock} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Complains" component={Complains} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="AllComplains" component={AllComplains} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="AllCollector" component={AllCollector} />
            <Stack.Screen name="AddCollector" component={AddCollector} />
            <Stack.Screen name="AllDrivers" component={AllDrivers} />
            <Stack.Screen name="AddDrivers" component={AddDrivers} />
            {/* //////////////User Dashboard Screen///////////////////// */}
            <Stack.Screen name="UserPackages" component={UserPackages} />
            <Stack.Screen name="Userdashboard" component={Userdashboard} />
            <Stack.Screen name="SendGarbage_request" component={SendGarbage_request} />
            <Stack.Screen name="AllToken" component={AllToken} />
            <Stack.Screen name="UserMyPackages" component={UserMyPackages} />
            {/* ///////////////////Collector Dashboard Screen/////////////// */}
            <Stack.Screen name="CollectorDashboard" component={Collector} options={{ headerShown: false }} />
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
            <Stack.Screen name="UserGrabage_request" component={UserGrabage_request} />
            {/* //////////////////////Driver Dashboard Screen/////////////////// */}
            <Stack.Screen name="Driverdashboard" component={Driverdashboard} />
            <Stack.Screen name="DriverRoute" component={DriverRoute} />
            <Stack.Screen name="TokenGenerate" component={Scan_Token} />           
            <Stack.Screen name="CustomButton" component={CustomButton} />
            <Stack.Screen name="MyModal" component={MyModal} />
            <Stack.Screen name="SetscheduleBlock" component={SetscheduleBlock} />
            <Stack.Screen name="AssignBlock" component={AssignBlock} />
            <Stack.Screen name="Leave" component={Leave} />

           
    


        </Stack.Navigator>

    );
};
export default StackNav;