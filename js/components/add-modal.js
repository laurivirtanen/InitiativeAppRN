import React from 'react'
import { Modal, View, Text } from 'react-native'


const AddModal = (props) => {
  return(
    <Modal 
      animationType="slide"
      transparent={false}
      visible={props.showModal}
      onRequestClose={() => props.toggleVisibility()}>
      <View style={{marginTop: 20}}>
        <Text>Modaali</Text>
      </View>
    </Modal>
  );
}

export default AddModal;