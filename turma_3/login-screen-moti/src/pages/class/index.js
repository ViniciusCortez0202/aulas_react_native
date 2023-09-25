import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { useAuthentication } from '../../routes/Auth';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { styles } from './style';
import ClassesItem from '../../components/ClassesItem';
import { collection, documentId, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from '../../../config/firebase';
import { StatusBar } from 'expo-status-bar';

export default function Class({ navigation }) {

  const auth = useAuthentication();
  const db = getFirestore(app);

  const [coursesName, setCoursesName] = useState([]);

  const getClassesFromStudent = async () => {
    const userId = auth.user?.uid;
    const classes = query(collection(db, 'turmas'), where('id_aluno', '==', userId));
    let result = await getDocs(classes)

    const coursesId = result.docs.map((doc) => doc.data().id_curso);

    const coursesQuery = query(collection(db, 'cursos'), where(documentId(), 'in', coursesId))
    result = await getDocs(coursesQuery);
    const courses = result.docs.map((doc) => doc.data().titulo)

    setCoursesName(courses)
  }

  useEffect(() => {
    if(auth.user?.uid){
      var unsubscribe = navigation.addListener('focus', getClassesFromStudent)
      getClassesFromStudent();
    }
    return unsubscribe;
  }, [auth.user?.uid])




  return (<View style={styles.container}>
    <FlatList 
    style={styles.containerList}
      data={coursesName}
      renderItem={({item}) => {
        return <ClassesItem item={item}/>
      }}
    />

    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => {
        navigation.navigate('signInClass');
      }}
    />
  </View>)
}