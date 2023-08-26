import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        minHeight: '30%',
        maxHeight: '50%',
        backgroundColor: 'white',
        padding: 20,
        margin: 50
    },
    worload: {
        marginRight: 5,
        fontSize: 18
    },
    title: {
        flexWrap:'wrap',
        fontWeight: '700'
    },
    descriptionContainer: {
        margin: 20
    },
    descriptionText: {
        fontSize: 18
    },
    topics: {
        flexWrap: "wrap",
        flexDirection: "row"
    },
    topic: {
        margin: 2
    }
})