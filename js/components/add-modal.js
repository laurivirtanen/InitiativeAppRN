import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, StyleSheet, ToastAndroid } from 'react-native'
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
    showFeedback: false,
    showSuggestions: false
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
      ToastAndroid.show("Added: "+this.state.name, ToastAndroid.SHORT);
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
    if (query.length > 2) {
      this.props.monsters.map((item, index)=> {
        if(item.name.toLowerCase().includes(query.toLowerCase())){
          let obj = {index: index, name: item.name};
          returnData.push(obj);
        }
      });
    }
    
    if (returnData.length == 1 && returnData[0].name === query) {
      return [];
    }
    return returnData;
  }
  
  selectFromMonsters = (index) => {
    let monster = this.props.monsters[index];
    this.setState({
      name: monster.name,
      adv: monster.adv,
      mod: monster.mod,
      isPC: monster.isPC,
      showSuggestions: false
    });
  }

  handleRadioChange = () => {
    switch(this.state.adv) {
      case "adv":
        return 0;
      case "normal":
        return 1;
      case "disadv":
        return 2;
      default:
        return 1;
    }
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
              <View style={[styles.modalContainer, styles.modalTmplPlugin]}>
                <Text style={styles.modalTitle}>Add new character</Text>
                <View style={{ flexDirection: "row", padding: 8}} >
                  <View style={{flex:5}}>
                    <Autocomplete
                      inputContainerStyle={styles.modalTextInputContainer}
                      containerStyle={{
                          flex: 4,
                          left: 0,
                          position: 'absolute',
                          borderWidth: 0,
                          right: 0,
                          top: 0,
                          zIndex: 144
                      }}
                      data={data}
                      hideResults={!this.state.showSuggestions}
                      renderTextInput={(props) => (
                        <TextInput
                          style={styles.modalTextInput} 
                          placeholder="Character Name"
                          defaultValue={this.state.name}
                          onEndEditing={() => this.setState({showSuggestions: false})}
                          onChangeText={text => this.setState({ name: text, showSuggestions: true })}
                          autoCapitalize="words" />
                      )}
                      renderItem={data => (
                        <TouchableNativeFeedback
                          onPressOut={() => this.selectFromMonsters(data.index)} >
                          <View style={{borderBottomWidth: 1}}>
                            <Text style={{fontSize: 18}}>{data.name}</Text>
                          </View>
                        </TouchableNativeFeedback>
                      )} />
                  </View>
                  <TextInput
                    style={styles.modalNumberInput}
                    defaultValue={(this.state.mod != null || this.state.mod != undefined)? this.state.mod.toString() : ''}
                    keyboardType="numeric"
                    onChangeText={(text) => this.setState({ mod: Number(text) })}
                    placeholder="Mod" />
                </View>
                <View style={styles.modalRadioContainer}>
                  <RadioButtonGroup buttonNames={buttons} callback={this.selectAdvMode} default={this.handleRadioChange()} />
                  <RadioButtonGroup buttonNames={["Player", "Monster"]} default={this.state.isPC? 0 : 1} callback={this.isPCChange} />
                </View>

                <View style={styles.modalAddCharacter}>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPressOut={this.prepareDataForSaving} >
                    <View style={styles.ButtonPrimary}>
                      <Text style={styles.ButtonText} >Add Character</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPressOut={this.exitModal} >
                    <View
                      style={styles.ButtonSecondary} >
                      <Text style={styles.ButtonTextSecondary}>Cancel</Text>
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
