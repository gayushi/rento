import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  

} from 'react-native';



export default class Form extends Component<{}> {
  render() {
    return (
       
        <View style = {styles.container}>
          <Image style = {styles.img}
            source= {require('../images/fab.jpg')}/>
       
          <TextInput style ={styles.input}
           underlineColorAndroid= 'rgba(0,0,0,0)' 
           placeholder="ex:-abc@gmail.com"
           />
          
           <TextInput style ={styles.input} 
             underlineColorAndroid= 'rgba(0,0,0,0)'
             placeholder="Password"
             secureTextEntry={true}/>  
            <TouchableOpacity   
             style= {styles.button}  >
           <Text style = {styles.buttonDisp}>
           Login
          </Text>
          </TouchableOpacity>

      </View>
        );
    }
  }
   

const styles = StyleSheet.create({
  container: {
      backgroundColor : '#c4001d',
      flexGrow : 1,
      alignItems: 'center',
      justifyContent: 'center'
    
  },
  img: {
      height: 150,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
       },
  // disp: {
   //    fontSize: 20,
   //    color: '#ffffff',
   //    alignItems: 'flex-start',
   //    justifyContent: 'center'
  //  },
  
  input: {
      width: 200,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginVertical: 20,
      borderRadius:30,
      paddingHorizontal: 20
  },
  button: {
      width: 150,
      height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 20,
        borderRadius:30,
        paddingHorizontal: 20,

    },
   buttonDisp:
     {
      fontSize: 20,
        color: '#ffffff',
        fontWeight :'600',
        textAlign:'center',
        marginTop: 4,
        elevation:4
        // alignItems:'center'
     }
  
});
