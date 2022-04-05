import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './auth';
import InfiniteScroll from "react-infinite-scroll-component";

const UserComponent = ({user , navigation}:{user:any , navigation : any})=>{
  return(
    <View style={styles.user}>
          <View style={styles.viewUserName}>
          <Text style={styles.userName}> Login : {user.login}</Text>
          <Text style={styles.userFolowers}>Nombre folowers : {user.countFollowers} </Text>
          </View>
          <Button
          onPress={() => navigation.navigate('Profile', { user: user })
          }
          title="voir Details"></Button>
         
    </View>
  );
}

export default function MainScreen({navigation}:{navigation:any}) {

const [users , setUsers] = useState<any[]>([])
const [loading , setLoading] = useState(true)
const [final , setFinal] = useState(false)
useEffect(() => {
  const getUsers = async () => {
    try {
      await axios.get("https://api.github.com/users")
      .then(async res => {
        
          for(let user of res.data)
          {
            await axios.get(user.followers_url)
            .then(response => {
                
                user.countFollowers = response.data.length
            })
            setFinal(true)            
            
          }
          
          
            setUsers(res.data)
          
          setLoading(false)
      })

            } catch (error) {
        console.log(error);
    }
} 
getUsers();
}, []) 


  return (
    
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
      {users?.map((user)=>(
        <UserComponent navigation={navigation} user={user} key={user.login}/>
      ))}
      
      </ScrollView>
    
      <StatusBar style="auto" />

    </View>
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

