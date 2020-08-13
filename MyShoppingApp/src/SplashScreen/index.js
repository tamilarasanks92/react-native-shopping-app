import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { CommonActions } from '@react-navigation/native'

export default class SplashScreen extends Component {
    navigateToLogin = () => {
        this.props.navigation.navigate('Login')
    }
    componentDidMount() {
        var that = this
        setTimeout(function () {
            that.props.navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: 'Login' }],
                }),
            )
        }, 2000)
    }
    render() {
        return (
            <SafeAreaView style={styles.content}>
                <Text style={styles.textTitle}>My Shopping App</Text>
                <Text style={styles.textDescription}>Shop Online Pick Up in Store</Text>
                <Text style={styles.textPowered}>Powered By Tamilarasan</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: 35,
        padding: 10,
        fontStyle: 'normal',
        color: '#3333ff',
    },
    textTitle: {
        fontSize: 35,
        color: '#FFFFFF',
        alignItems: 'center',
        marginBottom: 5,

    },
    textDescription: {
        fontSize: 16,
        color: '#CACFE5',
        marginBottom: 70,

    },
    textPowered: {
        fontSize: 14, color: '#CACFE5',
        marginBottom: 10,

    },
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#435BC9",
        alignItems: 'center',
    },
})