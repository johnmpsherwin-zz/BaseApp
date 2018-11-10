import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default class Profile extends Component {

    static navigationOptions = ({ navigation }) => {
       return {
            title: "Profile"
        }
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