import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking
} from 'react-native'
import { CommonActions, useFocusEffect } from '@react-navigation/native'

const CustomDrawer = props => {
  const { navigation, state } = props

  function DrawerItem(item) {
    const { imageName, name, active, onClick } = item
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          onClick()
        }}>
        <Text style={(styles.itemText, { color: active ? '#435BC9' : '#000', marginLeft: 20 })}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    < SafeAreaView >
      <DrawerItem
        imageName={'home'}
        name={'Home'}
        active={activeIndex == 0}
        onClick={() => navigation.navigate('Home')}
      />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#435BC9',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketContainer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#546CD9',
  },
  avatar: {
    backgroundColor: '#ddd',
    color: '#000',
    borderRadius: 30,
    textAlign: 'center',
    padding: 16,
    fontWeight: 'bold',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  itemImage: {
    marginHorizontal: 24,
  },
  itemText: {
    fontSize: 16,
  },
})

export default CustomDrawer
