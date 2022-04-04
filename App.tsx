import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { JSXElementConstructor } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';


const UserComponent = ()=>{
  return(
    <View style={styles.user}>
          <View style={styles.viewUserName}>
          <Text style={styles.userName}> Login : Hamza Boulman</Text>
          <Text style={styles.userFolowers}>Nombre folowers : 200 </Text>
          </View>
          <Button title="voir Details"></Button>
         
    </View>
  );
}

export default function App() {
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
