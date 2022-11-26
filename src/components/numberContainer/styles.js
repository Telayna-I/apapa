import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.alternative,
        borderWidth: 2,
        borderRadius: 3,
    },
    number:{
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
    }

})