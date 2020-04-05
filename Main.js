import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Profile from './screens/Profile'

const Stack = createStackNavigator()

export default function Main(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: true }}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Ini TalkShow' }}/>
                <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile page' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}