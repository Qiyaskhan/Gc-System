import { View, Text } from 'react-native';
import React from 'react';
import Login from '../Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Admin from '../Admin_Side/Admin';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
    <NavigationContainer>
        <Drawer.Navigator >
            <Drawer.Screen
                name="Admin"
                component={Admin}
                options={{ drawerLabel: 'Admin' }}
            />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{ drawerLabel: 'Login' }}
            />
        </Drawer.Navigator>
        </NavigationContainer>
        
    );
}
export default DrawerNav