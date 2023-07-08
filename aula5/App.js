import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, FAB, PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json'
import { AppRegistry } from 'react-native';
import CardComponent from './src/componentes/Card';


export default function App() {
  const data = [
    {
      title: "Lorem ipsum",
      data: [{
        id: 1,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 3,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 4,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }],
    },
    {
      title: "Lorem ipsum",
      data: [{
        id: 1,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 3,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 4,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }],
    },
    {
      title: "Lorem ipsum",
      data: [{
        id: 1,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 3,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 4,
        titulo: "What is Lorem Ipsum?",
        conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }],
    }
  ]

  const data2 = [{
    id: 1,
    titulo: "What is Lorem Ipsum?",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    titulo: "What is Lorem Ipsum?",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    titulo: "What is Lorem Ipsum?",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 4,
    titulo: "What is Lorem Ipsum?",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }]
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/*<Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => console.log('Pressed')}
          />*/}

        {/*<FlatList
            data={data2}
            renderItem={({item}) => {
              return <CardComponent {...item} />
            }}
            ItemSeparatorComponent={<View style={{margin: 10}}><Divider /></View>}
          />*/}

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {
            data2.map((item) => {
              return <CardComponent {...item} key={item.id} />
            })
          }
        </ScrollView>

       { /*<SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
           <CardComponent {...item}/>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{margin: 10, fontSize: 35}}>{title}</Text>
          )}
          />*/}

      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});
