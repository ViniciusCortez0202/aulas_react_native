import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20
    },
    content: {
      backgroundColor: 'red',
      height: 250,
      width: 250,
      margin: 10,
      borderWidth: 5,
      //alignItems: 'center',
      //justifyContent: 'center',
      //padding: 10
    },
    title: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    box1: {
      flex: 2,
      backgroundColor: 'green'
    },
    box2: {
      flex: 2,
      backgroundColor: 'blue'
    }
  });