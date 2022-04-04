import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View,FlatList } from 'react-native';


const UserComponent = ()=>{
  return(
    <View style={styles.user}>
          <View style={styles.viewUserName}>
          <Text style={styles.userName}> Login : Hamza Boulman</Text>
          <Text style={styles.userFolowers}>Nombre folowers : 200 </Text>
          </View>
          {/* <Button title="voir Details"></Button> */}
         
    </View>
  );
}

export default function App() {

const [users , setUsers] = useState([])
const [loading , setLoading] = useState(true)

useEffect(() => {
  const getUsers = async () => {
    try {
      await axios.get("https://api.github.com/users")
      .then(res => {
          setUsers(res.data)
          setLoading(true);
      })

            } catch (error) {
        console.log(error);
    }
    setLoading(false)
} 
getUsers();
}, []) 


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
      <UserComponent/>
      <UserComponent/>
      <UserComponent/>
      <UserComponent/>
      <UserComponent/>
      </ScrollView>
      <Text>Hamza Boulman Khadija Majid Kharrachi Khayya</Text>
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
