import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import CourseCard from '../../components/CourseCard';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where } from "firebase/firestore"
import app from '../../../config/firebase'
import { ActivityIndicator, FAB } from 'react-native-paper';
import { styles } from './style';
import { MotiView, useDynamicAnimation } from 'moti';
import { Container } from '../../components/Container';
import { useAuthentication } from '../../routes/Auth';
import Toast from 'react-native-root-toast';

export default function Course({ navigation }) {

    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const createCourseAnimation = useDynamicAnimation(() => ({
        translateY: 0
    }))

    const db = getFirestore(app)
    const auth = useAuthentication();
    const getCourses = async () => {
        setLoading(true)
        const queryCourses = query(collection(db, 'cursos'), where('id_professor', '==', auth.user?.uid))
        const result = await getDocs(queryCourses);

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

    const verifyStudentsInCourse = async (idCourse) => {
        const queryClass = query(collection(db, 'turmas'), where('id_curso', '==', idCourse));
        const result = await getDocs(queryClass);    
        return result.empty;
    }

    const deleteCourse = async (idCourse) => {
        if (!(await verifyStudentsInCourse(idCourse))) {
            Toast.show("Não é possível remover o curso, pois há alunos matriculados")
        }
        else {
            await deleteDoc(doc(db, 'cursos', idCourse));
            Toast.show("Curso deletado com sucesso")
            getCourses();
        }
    }

    useEffect(() => {
        if (auth.user?.uid) {
            var unsubscribe = navigation.addListener('focus', getCourses);
            getCourses();
        }
        return unsubscribe;
    }, [auth.user?.uid])

    if (loading) {
        return (
            <Container style={{ justifyContent: 'center' }}>
                <ActivityIndicator size={32} />
            </Container>
        )
    }


    return (
        <View>
            <FlatList
                data={courses}
                renderItem={({ item }) => {
                    return <CourseCard item={item} events={[
                        {
                            title: "Editar",
                            fun: () => {
                                navigation.navigate("createCourse", { item });
                            }
                        },
                        {
                            title: "Excluir",
                            fun: () => {
                                deleteCourse(item.uid)
                            }
                        },
                    ]} />
                }}
                onScroll={(e) => {
                    const heightScreen = Dimensions.get("window").height;
                    const current = e.nativeEvent.contentOffset.y
                    if (current <= heightScreen) {
                        createCourseAnimation.animateTo({
                            translateY: e.nativeEvent.contentOffset.y,

                        })
                    }
                }}
            />
            <MotiView
                state={createCourseAnimation}
            >
                <FAB
                    icon={"plus"}
                    label='Criar Curso'
                    style={styles.fab}
                    onPress={() => {
                        navigation.navigate("createCourse")
                    }}
                />
            </MotiView>
        </View>
    );
}