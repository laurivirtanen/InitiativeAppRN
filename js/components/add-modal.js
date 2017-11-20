import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, StyleSheet } from 'react-native'
import RadioButtonGroup from './radio-buttons'
import { styles } from '../styles/styles'
/*
Notice the weird usage of TouchableWithoutFeedback elements,
this is done to accomplish the click-outside-modal-to-close.
Basically the first Touchable fills the whole screen,
and the second has a null onPress-function, that fills the actual modal.
*/
const buttons = ["Advantage", "Normal", "Disadvantage"];

class AddModal extends Component {
  state = {
    name: '',
    adv: 'normal',
    mod: 0,
    isPC: null
  }

  selectAdvMode = (index) => {
    // event.preventDefault();
    console.log(index);
    switch(Number(index)) {
      case 0:
        this.setState({adv: "adv"});
        break;
      case 1:
        this.setState({adv: "normal"});
        break;
      case 2:
        this.setState({adv: "disadv"});
        break;
      default:
        break;
    }
    
  }

  render() {
    console.log(this.state);
    return(
      <Modal 
        animationType="fade"
        transparent={true}
        visible={this.props.showModal}
        onRequestClose={() => this.props.toggleVisibility()}
        >
        <TouchableWithoutFeedback 
          style={{backgroundColor: "#00000060"}}
          onPress={() => this.props.toggleVisibility()}>
          <View style={styles.modalBase}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContainer}>
                <Text>Add new character</Text>
                <View style={{flexDirection: "row"}} >
                  <TextInput 
                    style={styles.modalTextInput} 
                    autoCorrect={false} 
                    autoCapitalize="words"
                    onChangeText={(value) => this.setState({name: value})}
                    placeholder="Character Name" />
                  <TextInput 
                    style={styles.modalNumberInput} 
                    keyboardType="numeric" 
                    onChangeText={(value) => this.setState({mod: Number(value)})} 
                    placeholder="Mod" />
                </View>
                <View style={styles.modalRadioContainer}>
                  <RadioButtonGroup buttonNames={buttons} callback={this.selectAdvMode} default={1} />
                  <RadioButtonGroup buttonNames={["Player", "Monster"]} callback={() => {}} />
                  
                </View>
                {/*<View style={{flexDirection: "row"}} >
                  <TouchableNativeFeedback
                    onPressOut={this.selectAdvMode}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{backgroundColor: "#f00", flex: 1}} ><Text>Nappi</Text></View>
                    </TouchableNativeFeedback>
                    <View style={{backgroundColor: "#f00", flex: 1}} ><Text>Nappi</Text></View>
                    
                </View>*/}
                <View style={styles.modalAddCharacter}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}>
                
                <View style={styles.modalAddButton}
                >
                  <Text>Add Character</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                 >
                  <View
                      style={styles.modalAddButton}
                  >
                  <Text>Cancel</Text>
                  </View>
                </TouchableNativeFeedback>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default AddModal;

  

