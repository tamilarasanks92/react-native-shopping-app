import React, { Component } from 'react'
import { Alert, StyleSheet, View, TouchableOpacity, TextInput, SafeAreaView, Text } from 'react-native'
import { CommonActions } from '@react-navigation/native'

export default class LoginScreen extends Component {
    componentDidMount() {
        console.log('Mounted')
    }

    loginTapped = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <SafeAreaView style={{ paddingHorizontal: 20, backgroundColor: '#fff', height: '100%' }}>
                <Text style={[styles.headerStyle, { marginTop: 20, paddingHorizontal: 20 }]}>Sign In</Text>
                <View style={styles.inputContainer}>
                    <Text>Email</Text>
                    <TextInput ref={input => { this.textInput = input }} style={styles.input} keyboardType={'email-address'}
                        textContentType={'emailAddress'}
                        autoCompleteType='off'
                        returnKeyType={'next'}
                        onChangeText={text => this.setState({ username: text })}
                        onSubmitEditing={() => {
                            this.pwd.focus()
                        }}
                    />
                    <Text style={{ marginTop: 15 }}>Password</Text>
                    <TextInput
                        ref={input => { this.pwd = input }}
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                        onSubmitEditing={this.loginTapped}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.loginBtn} onPress={this.loginTapped}>
                            <Text style={{ color: '#0000FF' }}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => console.log('Register now clicked')}><Text style={{ color: '#0000FF' }}>Register</Text></TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        margin: 20,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 6
    },
    headerStyle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    inputContainer: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    input: {
        borderWidth: 1.5,
        marginTop: 7,
        height: 48,
        fontSize: 16,
        paddingHorizontal: 15
    }
})
