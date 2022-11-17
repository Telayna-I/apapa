import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function App() {
  const [ task, setTask ] = useState('')
  const [ taskList, setTaskList ] = useState([])
  const [ selectedTask, setSelectedTask ] = useState(null)
  const [ modalVisible, setModalVisible ] = useState(false)
  const [ complete, setComplete ] = useState(false)

  const handleTasks = () => {
    if(task.length > 0){
      setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
      setTask('');
    }
  }

  const handleSelected = (item) => {
    setSelectedTask(item)
    setModalVisible(true);
  }

  const handleCompleted = () => {
    setComplete(!complete)
  }

  const renderItem = ({item}) => (
    <View key={item.id} style={complete ? styles.listItemContainerCompleted : styles.listItemContainer}>
      <Text style={styles.listItem}>{item.value}</Text>
      <View style={styles.itemListButtons} >
        <TouchableOpacity style={{paddingHorizontal: 15}} onPress={() => handleSelected(item)}><Text style={{fontSize: '20px'}}>❌</Text></TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 15}} onPress={handleCompleted} ><Text style={{fontSize: '20px'}}>✅</Text></TouchableOpacity>
      </View>
    </View>
  )

  const handleCancel = () =>{
    setModalVisible(!modalVisible)
  }
  const handleDelete = () =>{
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible)
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput 
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
        />
        <Button disabled={!task}  title='Add' color = '#212121' onPress={handleTasks} />
      </View>
      <View style={styles.listContainer} >
        <Text style={styles.listTitle}>Todo list</Text>
      </View>
      <FlatList
        style={styles.flat}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal visible={modalVisible} animationType='fade' transparent >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task detail</Text>
          <View style={styles.modalDetailContainer} >
            <Text style={styles.modalDetailText}>Seguro que desea eliminar la tarea ?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title='Cancelar' onPress={handleCancel}/>
            <Button title='Eliminar' onPress={handleDelete}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}


