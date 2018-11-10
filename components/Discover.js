import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default class Discover extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Discover"
      }
  };

  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Button title="Go To Detail View" onPress={() => this.props.navigation.navigate("Detail")} />
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