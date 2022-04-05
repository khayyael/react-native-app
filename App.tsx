import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import  React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const UserComponent = ({user,ScreenName}:{user:any,ScreenName:any})=>{
  const navigation=useNavigation();
  return(
    <View style={styles.user}>
          <View style={styles.viewUserName}>
          <Text style={styles.userName}> Login : {user.login}</Text>
          <Text style={styles.userFolowers}>Nombre folowers : {user.countFollowers} </Text>
          </View>
          <Button title="voir Details" onPress={() => navigation.navigate( ScreenName as never, {
            user:user
          }as never)}/>
    </View>
  );
}

 function DetailsScreen({navigation,route}:{navigation:any,route:any}) {
  const {user} = route.params;
  return (
    <View style={styles.container}>
     <Text>{user.login}</Text>
          <Text>{ user.avatar_url}</Text>
          <Image source={{uri: user.avatar_url}}
       style={{width: 400, height: 400}} />
       
    </View>
  );
}

function HomeScreen({navigation}: {navigation: any}) {
const [users , setUsers] = useState<any[]>([])
const [loading , setLoading] = useState(true)

useEffect(() => {
  const getUsers = async () => {
    try {
      await axios.get("https://api.github.com/users")
      .then(async res => { 
          setUsers(res.data)
          for(let user of res.data){
            try{
               await axios.get(user.followers_url).then(res => { 
                      user.countFollowers=res.data.length
              })
             }catch(error){
              console.log(error);
            }
          }
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
      {users?.map((user)=>(
        <UserComponent user={user}  key={user.login} ScreenName="Details"/>
      ))}
      </ScrollView>
      <StatusBar style="auto" />

    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
