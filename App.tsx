import React from 'react';
import {NavigationContainer} from '@react-navigation/native';;
import MainScreen from './screens/main';
import AuthScreen from './screens/auth';
import { RootStackParamList } from './screens/RootStackPrams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}