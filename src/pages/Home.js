import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

export default class Home extends Component<{}> {
	renderSeparator = () =>{
		return(
			<View style = {{height:1, width:400, backgroundColor: 'black'}}>
			</View>
			)
	} 
  render() {
    return (
      <View style={styles.container}>
              <FlatList  
         data={[
            {key: 'EARNINGS'},
            {key: 'MY LEADS'},
            {key: 'OFFERS'},
            {key: 'ADD NEW LEAD'}
            ]}
            renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
         ItemSeparatorComponent = {this.renderSeparator}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#c4001d',
    flex : 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 28,
    height: 44,
    flex : 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
     

  },
 
  });