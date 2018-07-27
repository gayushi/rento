import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
export default class NewLead extends Component{
			onTextChanged(text) {
			this.setState({
        mobile: text.replace(/[^0-9]/g, ''),
    });
			}

  	render(){
		return (
	     	<View style={styles.container}>
	     	<View style={styles.container}>
	     	<Text style = {styles.text}> ENTER THE DETAILS OF THE NEW LEAD  </Text>
	     	</View>
	 			<TextInput style = {styles.input}
	 				 placeholder = 'Enter the lead type'/>
	 			<TextInput style = {styles.input}
	 				 placeholder = 'enter the name'/>
	 			<TextInput style = {styles.input}
	 				 placeholder = 'enter the phone number'
	 				 keyboardType = 'numeric'
					 onChangeText = {(text) => this.onTextChanged(text)}
					 value ={() => {this.state.myNumber}}
					 maxlength = {10}/>
	 			<TextInput style = {styles.input}
	 				 placeholder = 'enter the e-mail id'/>
	 			<TextInput  style= {styles.input}
	 			 	 placeholder = 'enter the location'/>
	 			 	 <View style={styles.container}>
	 			 <TouchableOpacity  >
	 			 <Text style = {styles.button}> SAVE </Text>
	 			 </TouchableOpacity>
	 			 </View>
	 		</View>
	 		)
	 	}
	 }
 const styles = StyleSheet.create({
  container: {
    backgroundColor : '#c4001d',
    flexGrow : 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 20
    
  },
  input: {
      width: 200,
      backgroundColor: 'rgba(255,255,255,0.3)',
      marginVertical: 20,
      borderRadius:30,
      paddingHorizontal: 20
  },
  text :{
  fontSize : 24,
   fontWeight : "400",
   alignItems : 'center',
   justifyContent : 'center',
   color: 'rgba(255,255,255,0.9)',

},
button:
{
	fontSize : 24,
	fontWeight : '300',
	fontFamily: 'Cochin '
}
})

