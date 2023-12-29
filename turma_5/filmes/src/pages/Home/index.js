import { useEffect, useReducer, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, TextInput } from 'react-native-paper';
import CardFilmes from '../../componentes/Card';
import { pegarFilmesPorPagina } from '../../repository/filmesRepository';

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [filmes, setFilmes] = useState([])
    const pagina = useRef(1)

    const pegarFilmes = async () => {
      const resultado = await pegarFilmesPorPagina(pagina.current)
      const novosFilmes = filmes.concat(resultado)
      setFilmes(novosFilmes)
    }

    useEffect(() => {
        pegarFilmes()
        setLoading(false)
        
    }, [])



 return (
   <View style={styles.container}>
        {loading ?
        <ActivityIndicator/>
        :
        <FlatList 
            data={filmes}
            onEndReachedThreshold={0.4}
            onEndReached={async () => {
              pagina.current++
              await pegarFilmes()
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return  <CardFilmes item={item}/>
            }}
        />
        }
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      marginTop: 32,
      paddingHorizontal: 16
    },
  });
  