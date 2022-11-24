import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./styles";
import { Card, Input } from "../../components"

import React, {useState} from 'react'
import colors from "../../constants/colors";

const StartGameScreen = () => {

    const [number, setNumber] = useState('')
    const [selectedNumber, setSelectedNumber] = useState(null)
    const [confirmed, setConfirmed] = useState(false)

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g , ''));
    }

    const handleConfirm = (value) => {
        const chosenNumber = parseInt(number, 10)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            return
        }
    }
    const handleRestart = (value) => {
        setNumber('')
        setConfirmed(false)
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }} >
            <View style={styles.container} >
                <Text style={styles.title}>Comencemos...</Text>
                <Card style={styles.inputContainer} >
                    <Text style={styles.label} >Selecciona un numero</Text>
                    <Input 
                    style={styles.input} 
                    placeholder="0" 
                    maxLength={2}
                    keyboardType="number-pad"
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={onHandleChange}
                    value={number}

                    
                    />
                    <View style={styles.buttonsContainer} >
                        <Button
                        title= 'Resetear'
                        onPress={handleRestart}
                        color= {colors.primary}
                        />
                        <Button
                        title= 'Confirmar'
                        onPress={() => null}
                        color= {colors.primary}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen