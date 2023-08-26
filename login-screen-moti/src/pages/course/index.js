import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import CourseCard from '../../components/CourseCard';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from '../../../config/firebase'
import { ActivityIndicator, FAB } from 'react-native-paper';
import { styles } from './style';
import { MotiView, useDynamicAnimation } from 'moti';
import { Container } from '../../components/Container';

export default function Course({ navigation }) {
    
    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(true);
    const createCourseAnimation = useDynamicAnimation(() => ({      
        translateY: 0
    }))

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
       const unsubscribe = navigation.addListener('focus', getCourses);

       return unsubscribe;
    }, [])

    if(loading){
        return (
            <Container style={{justifyContent: 'center'}}>
                <ActivityIndicator size={32}/>
            </Container>
        )
    }


    return (
        <View>
            <FlatList
                data={courses}
                renderItem={({ item }) => {
                    return <CourseCard item={item} navigation={navigation}/>
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