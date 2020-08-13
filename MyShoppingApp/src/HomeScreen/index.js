import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSourceCategories: []
        }
    }

    componentDidMount() {
        fetch('URL_REQUEST', {
            method: 'GET'
        }).then((response) => response.json()).then((responseJson) => {
            this.setState({ dataSourceCategories: responseJson.categories })
        }).catch((error) => {
            console.error('Error' + error)
        })
    }

    componentWillUnmount() {

    }

    onItemTouched(item) {
        this.props.navigation.navigate('ItemList', {
            group_Id: item.id,
            group_Name: item.category,
        })
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => this.onItemTouched(item)}>
                <View
                    style={styles.categoryStyle}>
                    <Text style={styles.itemStyle}>{item.category}</Text>
                    <Icon name="right" size={20} color="#000" />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
                <Text style={styles.headerStyle}>CATEGORIES</Text>
                <FlatList
                    style={{ marginHorizontal: 10 }}
                    data={this.state.dataSourceCategories}
                    keyExtractor={item => item.id}
                    renderItem={item => this.renderItem(item)}
                />
            </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
    categoryStyle: {
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemStyle: {
        fontSize: 18,
    },
    headerStyle: {
        fontWeight: 'bold',
        fontSize: 25
    }
})