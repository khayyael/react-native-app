import React , { Component, useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image, FlatList, TextInput,} from 'react-native';
import { RootStackParamList } from './RootStackPrams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import axios from 'axios';


function FollowingScreen({ navigation, route }:{route:any , navigation:any}) {

  const [following , setFollowing] = useState([] as any)
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const getFollowing = async () => {
      try {
        await axios.get("https://api.github.com/users/"+route.params.user+"/following",{
          auth: {
            username: 'khayyael',
            password: 'L949xNnxTe9dHjq'
        }
        })
        .then( res => {
              setFollowing(res.data)
              setLoading(false)
        })
  
              } catch (error) {
          console.log(error);
      }
  } 
  getFollowing();
  }, [])
  return (
    <View style={styles.container}>
        <FlatList 
          style={styles.notificationList}
          data={following}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: item.avatar_url}}/>
                  <Text style={styles.name}>{item.login}</Text>
              </View>
            )}}/>
      </View>  
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEBEB',
    },
    formContent:{
      flexDirection: 'row',
      marginTop:30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
    },
    icon:{
      width:30,
      height:30,
    },
    iconBtnSearch:{
      alignSelf:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      marginLeft:15,
      justifyContent: 'center'
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      paddingTop:10,
      paddingBottom:10,
      marginTop:5,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      borderRadius:10,
    },
    image:{
      width:45,
      height:45,
      borderRadius:20,
      marginLeft:20
    },
    name:{
      fontSize:20,
      fontWeight: 'bold',
      color: "#000000",
      marginLeft:10,
      alignSelf: 'center'
    },
  }); 

export default FollowingScreen;