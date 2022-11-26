import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Header } from './components'
import colors from './constants/colors'
import { StartGameScreen, Game } from './screens'

export default function App() {

    const [ loaded ] = useFonts({
        'Poppins-Bold': require('../assets/Fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../assets/Fonts/Poppins-Italic.ttf'),
        'Poppins-Regular': require('../assets/Fonts/Poppins-Regular.ttf'),
    })
    
    const [ userNumber, setUserNumber ] = useState(null)

    const onStartGame = (selectedNumber) => {
        setUserNumber(selectedNumber);
    }

    let content = <StartGameScreen onStartGame={onStartGame} />
    if(userNumber){
        content = <Game selectedNumber={userNumber}/>
    }

    if(!loaded) {
        return(
            <View style={styles.containerr} >
                <ActivityIndicator size={'large'}  color={colors.textBlack} />
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Header title={ userNumber ? 'Diviertete 🎉' : 'Bienvenido !' }/>
            {content}
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})