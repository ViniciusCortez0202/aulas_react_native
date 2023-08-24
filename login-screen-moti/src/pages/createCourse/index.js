import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View } from 'react-native';
import { Container, Row } from '../../components/Container';
import CustomInput from '../../components/Input';
import { styles } from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button, Chip, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthentication } from '../../routes/Auth';
import app from '../../../config/firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Toast from 'react-native-root-toast';

export default function CreateCourse() {
    const auth = useAuthentication()
    const db = getFirestore(app)

    const [course, setCourse] = useState({
        id: "",
        id_professor: "",
        title: "",
        description: "",
        topics: [],
        workload: 0
    })

    const createNewCourse = async () => {
        await addDoc(collection(db, 'cursos'), {
            id_professor: auth.user.uid,
            titulo: course.title,
            descricao: course.description,
            topicos: course.topics,
            cargaHoraria: course.workload
        })
    }

    const [newTopic, setNewTopic] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={75}
        >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>

                <Text variant='headlineMedium' style={styles.headerText}>Adicione aqui um novo curso!!!</Text>

                <CustomInput value={course.title} placeholder={"Nome do curso"} onChangeText={(text) => {
                    setCourse({ ...course, title: text })
                }} />
                <Row style={styles.createTopics}>
                    <CustomInput value={newTopic} style={styles.topicsInput} placeholder={"Tópicos"}
                        onChangeText={setNewTopic} />
                    <MaterialIcons name={"add"} size={32} onPress={() => {
                        setCourse({ ...course, topics: [...course.topics, newTopic] });
                        setNewTopic("");
                    }} />
                </Row>
                <Row style={styles.topicsContainer}>
                    {
                        course.topics.map((topic, index) => {
                            return <Chip key={index} style={styles.topics} closeIcon={'close'} onClose={() => {
                                course.topics.splice(index, 1)
                                setCourse({ ...course })
                            }}>
                                {topic}
                            </Chip>
                        })
                    }
                </Row>


                <CustomInput value={course.workload} placeholder={"Carga horária"} keyboardType={"numeric"} onChangeText={(text) => {
                    setCourse({ ...course, workload: text })
                }} />
                <CustomInput value={course.description} style={styles.description} placeholder={"Descrição"} multiline onChangeText={(text) => {
                    setCourse({ ...course, description: text })
                }} />

                <Button labelStyle={styles.createCourse} onPress={async () => {
                    try {
                        await createNewCourse();
                        setCourse({
                            id: "",
                            id_professor: "",
                            title: "",
                            description: "",
                            topics: [],
                            workload: 0
                        })
                        Toast.show("Novo curso criado!!!");
                    } catch (error) {
                        console.log(error)
                        Toast.show("Não foi possível criar um novo curso!!!");
                    } finally {
                        Keyboard.dismiss()
                    }
                }}>Criar Curso</Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}