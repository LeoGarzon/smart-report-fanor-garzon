import { StyleSheet, Text, View ,Modal } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const ModalDeleteTask = ({taskSelected,
                          deleteTask,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModaDelete({})}
        >
            <View style={styles.container}>

            <Text style={styles.text}>Esta seguro de finalizar la actividad :{taskSelected.title}</Text>
            <ButtonPrimary title='si' onPress={deleteTask}/>
            <ButtonPrimary title='no' onPress={()=> onHandlerModaDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create({
    container:{
        backgroundColor:"grey",
        alignItems:"center",
        justifyContent:"space-around",
        padding:15,
        gap:20,
      },
      text:{
        width:"100%",
        borderWidth:2,
        borderColor:"white",
        marginHorizontal:10,
        marginVertical:15,
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:5,
        color:"white",
        fontSize:16,
        textAlignVertical:"top",
        alignItems:"center",
        
      }

})