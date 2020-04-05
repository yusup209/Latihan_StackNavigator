// this is the home screen
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Container, Text, Button } from 'native-base'

export default function Home(props){
    const { navigation } = props
    const profil = {
        name: 'Someone',
        age: 23,
        gender: 'Male'
    }

    return(
        <View style={styles.container}>
            <Text>Hello, this is the home page!</Text>
            <Button primary onPress={() => navigation.navigate("Profile", {profil}) }>
                <Text>Kamprettos</Text>
            </Button>
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