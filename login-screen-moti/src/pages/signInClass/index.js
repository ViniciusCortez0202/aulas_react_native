import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import CourseCard from '../../components/CourseCard';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../../config/firebase';
import { Container, Row } from '../../components/Container';
import { ActivityIndicator, Button, Chip, Modal, Portal, Text } from 'react-native-paper';
import { styles } from './styles';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAuthentication } from '../../routes/Auth';
import Toast from 'react-native-root-toast';

export default function SignInClass() {


    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const [modalItem, setModalItem] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const auth = useAuthentication();

    const showModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const db = getFirestore(app)

    const getCourses = async () => {
        setLoading(true)
        const result = await getDocs((collection(db, "cursos")));

        const formatedCourses = result.docs.map((doc) => {
            return {
                uid: doc.id,
                id_professor: doc.data().id_professor,
                title: doc.data().titulo,
                description: doc.data().descricao,
                topics: doc.data().topicos,
                workload: doc.data().cargaHoraria
            }
        })
        setCourses(formatedCourses);
        setLoading(false)
    }

    useEffect(() => {
        getCourses();
    }, [])

    if (loading) {
        return (
            <Container style={{ justifyContent: 'center' }}>
                <ActivityIndicator size={32} />
            </Container>
        )
    }

    return (
        <View>
            <FlatList data={courses} renderItem={({ item }) => {
                return <Pressable onPress={() => {
                    setModalItem(item);
                    showModal();
                }}>
                    <CourseCard item={item} />
                </Pressable>
            }} />
            <Portal>
                <Modal visible={modalVisible} onDismiss={closeModal} contentContainerStyle={styles.modalContainer}>
                    <Row>
                        <Text style={styles.title} variant='headlineSmall'>{modalItem.title}</Text>
                        <Row>
                            <Text variant='titleMedium' style={styles.workload}>{modalItem.workload}</Text>
                            <MaterialIcons name="access-time" size={18} />
                        </Row>
                    </Row>
                    <View style={styles.topics}>
                        {modalItem.topics?.map((topic, index) => {
                            return <Chip key={index} style={styles.topic}><Text>{topic}</Text></Chip>
                        })}
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{modalItem.description}</Text>
                    </ScrollView>

                    <Button
                        mode='contained' onPress={async () => {

                            try {
                                await addDoc(collection(db, 'turmas'), {
                                    id_aluno: auth.user.uid,
                                    id_curso: modalItem.uid
                                });
                                Toast.show("Parabéns!!! Você entrou em uma nova turma.")
                            } catch (error) {
                                Toast.show("Não foi possível entrar nessa turma, tente novamente mais tarde.")
                            }

                        }}
                    >
                        Entrar na turma
                    </Button>
                </Modal>
            </Portal>
        </View>
    );
}