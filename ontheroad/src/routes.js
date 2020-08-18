import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Checklist from './components/pages/Checklist/index';
import LeituraQRCode from './components/pages/LeituraQRCode/index';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="LeituraQRCode" component={LeituraQRCode} />
      <AppStack.Screen name="Checklist" component={Checklist} />
    </AppStack.Navigator>
  );
}
