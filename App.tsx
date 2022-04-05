
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './screens/RootStackPrams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/main';
import AuthScreen from './screens/auth';
import FollowingScreen from './screens/following';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'main' }}
        />
        <Stack.Screen name="Profile" component={AuthScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:40
  },
  scrollView: {
    
  },
  user:{
    display:'flex',
    flexDirection:'column',
    backgroundColor: "#226988",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:25,
    marginBottom:20,
    width:290,
    marginTop:40,
  },
  userName:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
  },
  userFolowers:{
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center'
  },
  viewUserName:{
    marginBottom:20
  }
});

