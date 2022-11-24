import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'



export const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title:{
        fontSize: 18,
        color: colors.textBlack,
        textAlign: 'center',
        paddingVertical: 20,
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5
    },
    input:{
        width: '100%',
        minWidth: 70,
        textAlign: 'center',
        fontSize: 22,
        paddingVertical: 10,
        textAling: 'center',
    },
    buttonsContainer:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    label:{
        fontSize: 15,
        color: colors.textBlack,
        paddingVertical: 5,
        textAlign:'center',
    }
})