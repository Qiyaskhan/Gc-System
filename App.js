
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

global.apiUrl = 'http://192.168.43.221/Fyp1api/api';

import StackNav from './screens/Navigation/StackNav';
export default function Home() {
  
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

