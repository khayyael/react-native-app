import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



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
      <FlatList 
       data={users}
       renderItem={({item}) => <Text>{item.login}</Text>}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
