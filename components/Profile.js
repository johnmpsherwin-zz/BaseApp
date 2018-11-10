import React, { Component } from 'react'
import { View, StyleSheet, Button, ScrollView, Image, Text, Animated, Dimensions } from 'react-native'

const headerMaxHeight = 200
const headerMinHeight = 80
const profileImageMaxHeight = 80
const profileImageMinHeight = 60
const imageMinBlur = 0
const imageMaxBlur = 30

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    /*static navigationOptions = ({ navigation }) => {
       return {
            title: "Profile"
        }
    };*/

    render() {

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight],
            outputRange: [headerMaxHeight, headerMinHeight],
            extrapolate: "clamp"
        })

        const profileHeight = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight],
            outputRange: [profileImageMaxHeight, profileImageMinHeight],
            extrapolate: "clamp"
        })

        const profileMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight],
            outputRange: [headerMaxHeight - (profileImageMaxHeight / 2), headerMaxHeight],
            extrapolate: "clamp"
        })

        const headerZIndex = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight],
            outputRange: [0, 1],
            extrapolate: "clamp"
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight, headerMaxHeight - headerMinHeight + 24 + profileImageMinHeight, headerMaxHeight - headerMinHeight + 24 + profileImageMinHeight + 44],
            outputRange: [-20, -20, -20, 12],
            extrapolate: "clamp"
        })

        const imageBlurRadius = this.state.scrollY.interpolate({
            inputRange: [0, headerMaxHeight - headerMinHeight, headerMaxHeight - headerMinHeight + 24 + profileImageMinHeight],
            outputRange: [imageMinBlur, imageMinBlur, imageMaxBlur],
            extrapolate: "clamp"
        })

        return (
            <View style={styles.mainViewStyle}>
                <Animated.View style={{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "#F8F8F8", height: headerHeight, zIndex: headerZIndex, overflow: "hidden" }}>
                <Animated.Image source={{uri: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f10f73ebce4fe5a7d70b028ca10880d&auto=format&fit=crop&w=375&q=80"}} style={{ flex: 1, width: null, height: null }} blurRadius={imageBlurRadius}  />
                    <Animated.View style={{position: "absolute", bottom: headerTitleBottom, alignSelf: "center" }}>
                        <Text style={{fontSize: 16, fontFamily: "Avenir", textAlign: "center", color: "#FFF", fontWeight: "500" }}>John Sherwin</Text>
                    </Animated.View>
                </Animated.View>
                <ScrollView style={{ flex: 1 }} onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])} scrollEventThrottle={16}>
                    <Animated.View style={{ 
                                height: profileHeight, 
                                width: profileHeight,
                                borderRadius: profileImageMaxHeight / 2,
                                borderColor: "#fff",
                                borderWidth: 3,
                                overflow: "hidden",
                                marginTop: profileMarginTop,
                                alignSelf: "center"
                            }}>
                        <Image source={{uri: "https://pbs.twimg.com/profile_images/1061255472119013376/VrY2Ck6s_400x400.jpg"}} style={{ flex: 1, width: null, height: null }} />
                    </Animated.View>
                    <Text style={{fontSize: 24, fontFamily: "Avenir", fontWeight: "bold", marginTop: 16, textAlign: "center", alignSelf: "center" }}>John Sherwin</Text>
                    <Text style={{fontSize: 16, fontFamily: "Avenir", textAlign: "center", color: "#999", fontWeight: "500", textAlign: "center", alignSelf: "center" }}>Dublin, Ireland 🇮🇪</Text>
                    <View style={{height: 1000, flex: 1, width: Dimensions.get('window').width}}/>
                </ScrollView>
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