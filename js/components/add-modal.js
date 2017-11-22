import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, StyleSheet } from 'react-native'
import RadioButtonGroup from './radio-buttons'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'
import { ADD_INITIATE } from '../actions/initiates'
import Autocomplete from 'react-native-autocomplete-input'
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
    mod: null,
    isPC: null,
    showFeedback: false
  }

  prepareDataForSaving = () => {
    if (!!this.state.name && this.state.isPC != null) {
      this.props.dispatch(
        ADD_INITIATE({
          name: this.state.name,
          adv: this.state.adv,
          mod: this.state.mod,
          isPC: this.state.isPC
        })
      );
      this.setState({
        name: '',
        adv: 'normal',
        mod: null,
        isPC: null
      }, this.showFeedback);
    }
  }

  selectAdvMode = (index) => {
    switch (Number(index)) {
      case 0:
        this.setState({ adv: "adv" });
        break;
      case 1:
        this.setState({ adv: "normal" });
        break;
      case 2:
        this.setState({ adv: "disadv" });
        break;
      default:
        break;
    }
  }
  isPCChange = (index) => {
    this.setState({ isPC: !Boolean(index) });
  }

  showFeedback = () => {
    console.log(this.props.monsters);
    console.log("FEEDBACK!!!");
  }
  exitModal = () => {
    this.setState({
      name: '',
      adv: 'normal',
      mod: null,
      isPC: null
    }, this.props.toggleVisibility());
  }

  _filterData = (query) => {
    let returnData = [];
    this.props.monsters.map(item => {
      if(item.name.includes(query)){
        returnData.push(item.name);
      }
      
    });
    console.log(returnData);

  } 

  render() {
    const data = this._filterData(this.state.name);
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.showModal}
        onRequestClose={() => this.exitModal()} >
        <TouchableWithoutFeedback
          style={{ backgroundColor: "#00000060" }}
          onPress={() => this.props.toggleVisibility()}>
          <View style={styles.modalBase}>
            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={styles.modalContainer}>
                <Text>Add new character</Text>
                <View style={{ flexDirection: "row"}} >
                  <Autocomplete
                  containerStyle={{
                      flex: 1,
                      left: 0,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      zIndex: 144
                  }}
                  data={data}
                  defaultValue={this.state.name}
                  onChangeText={text => this.setState({ name: text })}
                  renderItem={data => (
                      <View style={{backgroundColor:'black'}}>
                        <Text>{data}</Text>
                      </View>
              
                  )} />
                  {/* <TextInput
                    style={styles.modalTextInput}
                    returnKeyLabel="Character Name"
                    autoCorrect={false}
                    value={this.state.name}
                    autoCapitalize="words"
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder="Character Name" /> */}
                  <TextInput
                    style={styles.modalNumberInput}
                    defaultValue={!!this.state.mod? this.state.mod.toString() : ''}
                    keyboardType="numeric"
                    onEndEditing={(event) => this.setState({ mod: Number(event.nativeEvent.text) })}
                    placeholder="Mod" />
                </View>
                <View style={styles.modalRadioContainer}>
                  <RadioButtonGroup buttonNames={buttons} callback={this.selectAdvMode} default={1} />
                  <RadioButtonGroup buttonNames={["Player", "Monster"]} default={this.state.isPC} callback={this.isPCChange} />
                </View>

                <View style={styles.modalAddCharacter}>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPressOut={this.prepareDataForSaving} >
                    <View style={styles.modalAddButton}>
                      <Text>Add Character</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPressOut={this.exitModal} >
                    <View
                      style={styles.modalAddButton} >
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

const mapStateToProps = (state) => {
  return {
    monsters: state.monsters
  }
};

export default connect(mapStateToProps)(AddModal);