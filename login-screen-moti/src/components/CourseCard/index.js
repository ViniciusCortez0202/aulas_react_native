import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Chip, IconButton, Menu, Text } from 'react-native-paper';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Row } from '../Container';
import { styles } from './styles';
export default function CourseCard({ item, navigation }) {

    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const RightContent = (props) => {
        return (
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={<IconButton {...props} icon={"dots-vertical"} onPress={openMenu} />}
            >
                <Menu.Item onPress={() => { 
                    navigation.navigate("createCourse", {item});
                    closeMenu()
                }} title="Editar" />
                <Menu.Item onPress={() => { }} title="Excluir" />
            </Menu>
        );
    }
    return (
        <Card style={styles.card}>
            <Card.Title
                title={<Row style={styles.title}>
                    <Text variant='headlineSmall' >{item.title}</Text>
                    <Text variant="titleMedium" style={styles.workload}>{item.workload}</Text>
                    <MaterialIcons name='access-time' size={15} />
                </Row>}
                right={RightContent}
            />
            <Card.Content style={styles.descriptionContainer}>
                <View style={styles.topics}>
                    {
                        item.topics.map((topic, index) => {
                            return <Chip key={index} style={styles.topic}><Text>{topic}</Text></Chip>
                        })
                    }
                </View>
                <Text variant='bodyLarge' style={styles.descriptionText} numberOfLines={3}>{item.description}</Text>
            </Card.Content>
        </Card>
    );
}