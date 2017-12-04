import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, StyleSheet, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'
import * as TmplActions from '../actions/templates'

class SaveModal extends Component {
    state = {nameInput: ''}
    saveTemplate = () => {
        console.log(this.state.nameInput);
        if (!!this.state.nameInput) {
            this.props.dispatch(
                TmplActions.SAVE_TEMPLATE(this.state.nameInput, this.props.initiates)
            );
            this.setState({nameInput: ''});
            this.props.toggleVisibility();
            this.props.drawer.closeDrawer();
        }
        
    }
    changeName = (text) => {
        this.setState({nameInput: text});
    }
    render(){
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.showModal}
                onRequestClose={() => this.exitModal()} >
                <TouchableWithoutFeedback
                    style={{ backgroundColor: "#00000060" }}
                    //onPress={() => this.props.toggleVisibility()}
                    >
                    <View style={styles.modalBase}>
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View style={[styles.modalContainer, styles.modalTmplPlugin]}>
                                <Text style={styles.modalTitle}>Saving template</Text>
                                <Text style={styles.modalDescription}>This saves the current initiate list as a template to use in future.</Text>
                                <TextInput 
                                    autoCapitalize='words'
                                    autoFocus
                                    
                                    defaultValue={this.state.nameInput}
                                    placeholder='Template name'
                                    style={[styles.modalTextInput, {color: 'black', marginLeft: 16, marginRight: 16}]} 
                                    onChangeText={text => this.changeName(text)} />
                                <View style={{flexDirection: 'row', padding: 16, justifyContent: 'center'}}>
                                    <TouchableNativeFeedback
                                        onPressOut={this.saveTemplate}>
                                        <View style={styles.ButtonPrimary}>
                                            <Text style={styles.ButtonText}>Save template</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableOpacity
                                        onPressOut={this.props.toggleVisibility} >
                                        <View style={styles.ButtonSecondary}>
                                            <Text style={styles.ButtonTextSecondary}>Cancel</Text>
                                        </View>
                                    </TouchableOpacity>
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
        initiates: state.initiates
    }
}

export default connect(mapStateToProps)(SaveModal);