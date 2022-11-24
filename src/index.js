import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './components'
import { StartGameScreen } from './screens'

export default function App() {
    return(
        <View style={styles.container}>
            <Header title={'Bienvenido !'}/>
            <StartGameScreen/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
})