import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import * as yup from 'yup'
import favicon from './assets/favicon.png';
import { Avatar, Button, Card, PaperProvider } from 'react-native-paper';
import InputExample from './src/inputExample';

export default function App() {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const data = [
    {
      title: "Titulo1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo4",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      title: "Titulo",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
  ]


  return (
    <PaperProvider>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Card style={styles.card} onPress={() => { }}>
              <Card.Title title={item.title} left={LeftContent} />
              <Card.Content>
                <ScrollView>
                  <Text variant="titleLarge">{item.content}</Text>
                </ScrollView>
              </Card.Content>

            </Card>
          )
        }}
      />


      {/* <InputExample/> */}

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  card: {

  }
});
