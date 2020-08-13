import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class ItemDetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemDetails: props.route.params.item_details
        }
    }

    componentDidMount() {
        fetch('URL_REQUEST', {
            method: 'GET'
        }).then((response) => response.json()).then((responseJson) => {
            this.setState({ dataSourceItems: responseJson.items })
        }).catch((error) => {
            console.error('Error' + error)
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <Icon style={{ justifyContent: 'center', alignSelf: 'center' }} name={this.state.itemDetails.image} size={256} color="#a00" />
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>{this.state.itemDetails.item}</Text>
                <Text style={{ fontSize: 30 }}>{this.state.itemDetails.price}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={() => console.log('Button pressed')}>
                    <Text style={{ color: '#00F' }}>Buy Now</Text>
                </TouchableOpacity>
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
    }
})