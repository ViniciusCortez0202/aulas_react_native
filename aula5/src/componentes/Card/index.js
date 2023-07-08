import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = (propriedades) => (
  <Card onPress={() => console.log("Teste card")}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">{propriedades.titulo}</Text>
      <Text variant="bodyMedium">{propriedades.conteudo}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CardComponent;