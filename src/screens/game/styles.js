import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    content:{
        width: '70%',
        height: 200,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    buttonsContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
})