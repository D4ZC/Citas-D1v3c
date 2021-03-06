import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text,TextInput, StatusBar, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ComentariosScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Envianos tus comentarios!</Text>
  
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Ingresa aqui tus comentarios" 
            placeholderTextColor="#ffff"
            keyboardType = 'default'
            
            />
        </View>
        

        <Button
          title= "Enviar"
          onPress = {() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36465d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoDivec:{
        flex : 1,
        alignSelf: 'center',
        width: 300,
        marginTop: 5,
      
    },
    inputView:{
      width:"90%",
      backgroundColor:"#36465d",
      borderRadius:10,
      height:100,
      marginBottom:30,
      justifyContent:"center",
      padding:20,
      marginTop: 60
    },
    inputText:{
      height:90,
      color:"white",
      
    },
    forgot:{
      color:"white",
      fontSize:20
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:50,
      marginBottom:50
    },
    loginText:{
      backgroundColor:"#36465d",
      color:"white"
    }
  });

export default ComentariosScreen;