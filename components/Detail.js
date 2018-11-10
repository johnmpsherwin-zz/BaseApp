import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderBackButton } from 'react-navigation';


export default class Detail extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Details",
      headerBackTitleStyle: {
        color: "#3545E2",
        fontFamily: "Avenir"
      },
      headerLeft: <HeaderBackButton tintColor={"#3545E2"} title="Discover" titleStyle={{fontFamily: "Avenir"}} onPress={ () => navigation.goBack() } />
    };
  };

  render() {
    return (
      <View style={styles.mainViewStyle}>
        
      </View>
    )
  }
}

const styles = new StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    }
})