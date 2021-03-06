import React,{useEffect, useContext, useState} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/user/userContext';

const Intro = () => {
    
    const navigation = useNavigation(); //Hook de navegación


    const { addUser}  = useContext(UserContext); //Agregar los datos al context
    
    useEffect(()=>{
            getData()                 
    },[])

    const getData = async () => {
        
        try {
            const jsonValue = await AsyncStorage.getItem('user') //Leer datos            
            const user = JSON.parse(jsonValue)            //Parsear datos a un obketo
            if(user) {                //Si hay información del usuario
                navigation.navigate("HomeDrawer",{user}) 
                addUser(user)
            }
            else {                //Si es null enviar a inicio de sesión
                navigation.navigate("Login")
            }
          
        } catch(e) {
            console.log(e)
            navigation.navigate("Login") // Cualquier error mandar a Login
        }
      }
      
    return ( 
        <>
        <View style={styles.container}>
            <Image 
             style={styles.logoDivec} source={require('../../images/DivecLogo.png')}  
            />
        </View>
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoDivec:{
        flex : 1,
        alignSelf: 'center',        
        marginTop: 5,
      
    },
})
 
export default Intro;