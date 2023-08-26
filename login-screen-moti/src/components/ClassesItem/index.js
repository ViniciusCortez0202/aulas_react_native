import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import MaterialICons from '@expo/vector-icons/MaterialIcons'
import { Divider, Text } from 'react-native-paper';
import { Row } from '../Container';

export default function ClassesItem({item}) {
 return (
   <View style={styles.container}>
        <Row>
            <Text style={styles.itemName}>{item}</Text>
            <MaterialICons name='arrow-forward-ios' size={22} />
        </Row>
        <Divider/>
   </View>
  );
}