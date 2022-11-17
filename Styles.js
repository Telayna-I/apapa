import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 'auto'
    },
    inputContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 40,
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    listContainer:{
        marginHorizontal: 20,
    },
    listTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#212121'
    },
    listItemContainer:{
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: '#212121',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        justifyContent: 'space-between',
        marginBottom: 5
    },
    listItem:{
        color: '#fff',
        paddingLeft: 15
    },
    flat: {
        marginHorizontal: 20
    },
    modalContainer: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDetailContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDetailText: {
        fontSize: 14,
    },
    selectedTask: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    modalButtonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    itemListButtons: {
        flexDirection: 'row'
    }
});