import React , { Component, useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image,} from 'react-native';
import { RootStackParamList } from './RootStackPrams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import axios from 'axios';


function AuthScreen({ navigation, route }:{route:any , navigation:any}) {

  const [following , setFollowing] = useState(0)
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const getFollowing = async () => {
      try {
        await axios.get("https://api.github.com/users/"+route.params.user.login+"/following",{
          auth: {
          username: 'khayyael',
          password: 'L949xNnxTe9dHjq'
      }
        })
        .then( res => {
              setFollowing(res.data.length)
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
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: route.params.user.avatar_url}}/>
                <Text style={styles.name}>
                  {route.params.user.login}
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Followers</Text>
              <Text style={styles.count}>{route.params.user.countFollowers}</Text>
            </View>
            <View style={styles.detailContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Following', { user: route.params.user.login })
          }>
              <Text style={styles.title}>Following</Text>
              <Text style={styles.count}>{following}</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>   
  );

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#226988",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});

export default AuthScreen;