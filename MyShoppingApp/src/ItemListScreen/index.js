import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class ItemListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSourceItems: []
        }
    }

    componentDidMount() {
        fetch('https://run.mocky.io/v3/6bd22c72-c8ab-4eff-ae15-0d2bcb230d13', {
            method: 'GET'
        }).then((response) => response.json()).then((responseJson) => {
            this.setState({ dataSourceItems: responseJson.items })
        }).catch((error) => {
            console.error('Error' + error)
        })
    }

    onItemTouched(item) {
        this.props.navigation.navigate('ItemDetails', {
            item_details: item
        })
    }

    renderItem({ item }) {
        const { width, height } = Dimensions.get('window')
        return (
            <TouchableOpacity
                onPress={() => this.onItemTouched(item)}>
                <View
                    style={[styles.gridViewBlockStyle, { width: (width - 40) / 2 }]}>
                    <Icon name={item.image} size={64} color="#000" />
                    <Text style={{ marginTop: 10 }}>{item.item}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <Text style={styles.headerStyle}>ITEMS</Text>
                <FlatList
                    data={this.state.dataSourceItems}
                    keyExtractor={item => item.id}
                    renderItem={item => this.renderItem(item)}
                    numColumns={2}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    gridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        height: 200,
        margin: 10,
        backgroundColor: '#00BCD4'
    },
    headerStyle: {
        fontWeight: 'bold',
        fontSize: 25
    }
})