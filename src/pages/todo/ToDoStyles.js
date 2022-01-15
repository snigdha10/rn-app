import {StyleSheet} from "react-native";

export default StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        paddingBottom: 20
    },
    textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '80%'
    },
    buttonStyle: {
        width: '20%'
    },
    goal: {
        marginVertical: 5,
        backgroundColor: '#e6f2ff',
        padding: 10
    }
});
