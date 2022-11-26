import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { NumberContainer, Card } from '../../components'
import { styles } from './styles'
import colors from '../../constants/colors'


const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.ceil(max)
    const random = Math.floor(Math.random() * (max - min) + min)
    if(random === exclude){
        return generateRandomNumber(min, max, exclude)
    }else{
        return random
    }
}

const Game = ({selectedNumber}) => {

    const [ randomNumber, setRandomNumber ] = useState(generateRandomNumber(1, 100, selectedNumber));

        return(
            <View style={styles.container}>
                <Card style={styles.content}>
                    <Text style={styles.title}>Numero del rival</Text>
                    <NumberContainer number={randomNumber} />
                    <View style={styles.buttonsContainer} >
                        <Button color={colors.primary} title={'Menor'} onPress={()=> null} />
                        <Button color={colors.primary} title={'Mayor'} onPress={()=> null} />
                    </View>
                </Card>
            </View>
        )
}

export default Game