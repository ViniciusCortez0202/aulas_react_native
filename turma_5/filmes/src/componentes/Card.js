import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardFilmes({item}) {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.post }}
                resizeMode='stretch' />
            <Card.Title title={item.titulo} />
            <Card.Content>
                <Text variant="bodyLarge">{item.descricao}</Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
      marginVertical: 16
    }
  });