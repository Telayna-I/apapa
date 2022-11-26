import React, {useState} from 'react'
import colors from "../../constants/colors";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { styles } from "./styles";
import { Card, Input, NumberContainer } from "../../components"


const StartGameScreen = ({onStartGame}) => {

    const [number, setNumber] = useState('')
    const [selectedNumber, setSelectedNumber] = useState(null)
    const [confirmed, setConfirmed] = useState(false)

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g , ''));
    }

    const handleConfirm = (value) => {
        const chosenNumber = parseInt(number, 10)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Numero no valido", "Por favor ingrese un numero entre 1 y 99",[{text:'Ok', style:'destructive', onPress: handleRestart}])
        }else{
            setConfirmed(true);
            setSelectedNumber(chosenNumber),
            setNumber('')
            Keyboard.dismiss();
        }
    }
    const handleRestart = (value) => {
        setNumber('')
        setConfirmed(false)
    }

    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer} >
            <Text style={styles.confirmedTitle} >Numero seleccionado:</Text>
            <NumberContainer number={selectedNumber} />
            <Button
            title="Jugar"
            onPress={()=> onStartGame(selectedNumber)}
            color= {colors.alternative}
            />
        </Card>

    ) : null

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
                        onPress={handleConfirm}
                        color= {colors.primary}
                        />
                    </View>
                </Card>
            {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen