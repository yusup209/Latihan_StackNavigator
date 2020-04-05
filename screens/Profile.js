import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default function Profile(props){
    const { route } = props
    const { profil } = route.params
    const { name, age, gender } = profil

    return(
        <View style={styles.container}>
            <Text>Name: { name }</Text>
            <Text>Age: { age } yrs old</Text>
            <Text>Gender: { gender }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})