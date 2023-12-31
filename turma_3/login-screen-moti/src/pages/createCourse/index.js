import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View } from 'react-native';
import { Container, Row } from '../../components/Container';
import CustomInput from '../../components/Input';
import { styles } from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button, Chip, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuthentication } from '../../routes/Auth';
import app from '../../../config/firebase';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import Toast from 'react-native-root-toast';
import * as yup from 'yup';
import { customHeaderTitle } from '../../utils/customComponents';

export default function CreateCourse({ route, navigation }) {
    const auth = useAuthentication()
    const db = getFirestore(app)
    const isUpdate = useRef(false)

    const [course, setCourse] = useState({
        uid: "",
        id_professor: "",
        title: "",
        description: "",
        topics: [],
        workload: 0
    })

    const schema = yup.object().shape({
        title: yup.string().required("Título é obrigatório"),
        description: yup.string().required("Descrição é obrigatório"),
        topics: yup.array().min(1, "É necessário no mínimo um tópico")
            .max(5, "Não é possível adicionar mais que cinco tópicos"),
        workload: yup.string().required("Carga horária é obrigatório")
    })

    useEffect(() => {
        if (route.params !== undefined) {
            setCourse(route.params.item);
            navigation.setOptions({headerTitle: () => customHeaderTitle(route.params.item.title)})
            isUpdate.current = true;
        }
    }, [])

    const createOrUpdateCourse = async () => {
        if (isUpdate.current) {
            const ref = doc(db, 'cursos', course.uid)
            await updateDoc(ref, {
                id_professor: auth.user.uid,
                titulo: course.title,
                descricao: course.description,
                topicos: course.topics,
                cargaHoraria: course.workload
            })
        } else {
            await addDoc(collection(db, 'cursos'), {
                id_professor: auth.user.uid,
                titulo: course.title,
                descricao: course.description,
                topicos: course.topics,
                cargaHoraria: course.workload
            })
        }
    }

    const validate = async () => {
        try {
            await schema.validate(course);
            sendData();
        } catch (error) {
            Toast.show(error.message);
        }
    }

    const sendData = async () => {
        try {
            await createOrUpdateCourse();
            setCourse({
                id: "",
                id_professor: "",
                title: "",
                description: "",
                topics: [],
                workload: 0
            })
            Toast.show(isUpdate.current ? "Curso Atualizado" : "Novo curso criado!!!");
        } catch (error) {
            console.log(error)
            Toast.show(isUpdate.current ? "Não foi possível atualizar o curso!!!" : "Não foi possível criar um novo curso!!!");
        } finally {
            Keyboard.dismiss()
        }
    }

    const [newTopic, setNewTopic] = useState("");

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={75}
        >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>

                <Text variant='headlineMedium' style={styles.headerText}>{isUpdate.current ? "Atualize o curso!!!" : "Adicione aqui um novo curso!!!"}</Text>

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

                <Button labelStyle={styles.createCourse} onPress={validate}>
                    {isUpdate.current ? "Atualizar curso" : "Criar Curso"}</Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}