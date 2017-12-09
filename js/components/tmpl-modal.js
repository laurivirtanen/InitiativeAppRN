import React, { Component } from 'react'
import { Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity, ToastAndroid } from 'react-native'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'
import * as InitActions from '../actions/initiates'
import * as TmplActions from '../actions/templates'

class TmplModal extends Component {
    
    loadTemplate = () => {
        let newItems = this.props.templates[this.props.templateIndex].values;
        if (!!newItems) {
        this.props.dispatch(
            InitActions.SET_FROM_TEMPLATE(newItems)
        );
        }
        ToastAndroid.show("Loaded: "+this.props.templates[this.props.templateIndex].name, ToastAndroid.SHORT);
        this.props.toggleVisibility();
        this.props.closeDrawer();
    }
    deleteTemplate = () => {
        this.props.dispatch(
            TmplActions.DELETE_TEMPLATE(this.props.templateIndex)
        ); 
        ToastAndroid.show("Deleted: " + this.props.templates[this.props.templateIndex].name, ToastAndroid.SHORT);
        this.props.toggleVisibility();
        this.props.closeDrawer();
    }
    clearList = () => {
        this.props.dispatch(InitActions.CLEAR_LIST());
        ToastAndroid.show("Cleared List!", ToastAndroid.SHORT);
        this.props.toggleVisibility();
        this.props.closeDrawer();
    }
    exitModal = () => {
        this.props.toggleVisibility();
    }
    render() {
        const tmplName = !!this.props.templates[this.props.templateIndex]? this.props.templates[this.props.templateIndex].name : '';
        const ModalView = () => {
            switch(this.props.action) {
                case 'clear':
                    return (
                        <View style={[styles.modalContainer, styles.modalTmplPlugin]}>
                            <Text style={styles.modalTitle}>Clearing List</Text>
                            <Text style={styles.modalDescription}>Clearing initiative list. Are you sure you want to proceed?</Text>
                            <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'center' }}>
                                <TouchableNativeFeedback
                                    onPressOut={this.clearList}>
                                    <View style={styles.ButtonPrimary}>
                                        <Text style={styles.ButtonText}>Clear list</Text>
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
                    );
                case 'load':
                    return (
                        <View style={[styles.modalContainer, styles.modalTmplPlugin]}>
                            <Text style={styles.modalTitle}>Loading template</Text>
                            <Text style={styles.modalDescription}>Loading <Text style={{fontWeight:'bold'}}>{tmplName}</Text> template overrides current initiative list. Are you sure you want to proceed?</Text>
                            <View style={{flexDirection: 'row', padding: 16, justifyContent: 'center'}}>
                                <TouchableNativeFeedback
                                    onPressOut={this.props.templates[this.props.templateIndex] != null ? this.loadTemplate :
                                        ToastAndroid.show("Unable to load empty template ", ToastAndroid.SHORT)}>
                                    <View style={styles.ButtonPrimary}>
                                        <Text style={styles.ButtonText}>Load template</Text>
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
                    );
                case 'delete':
                    return (
                        <View style={[styles.modalContainer, styles.modalTmplPlugin]}>
                        <Text style={styles.modalTitle}>Deleting template</Text>
                            <Text style={styles.modalDescription}>Deleting template <Text style={{ fontWeight: 'bold' }}>{tmplName}</Text>. Are you sure you want to proceed?</Text>
                        <View style={{flexDirection: 'row', padding: 16, justifyContent: 'center'}}>
                            <TouchableNativeFeedback
                                   onPressOut={this.props.templates[this.props.templateIndex] != null ? this.deleteTemplate :
                                        ToastAndroid.show("Unable to load delete template ", ToastAndroid.SHORT) }>
                                <View style={styles.ButtonPrimary}>
                                    <Text style={styles.ButtonText}>Delete template</Text>
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
                    );
                default:
                    return <View></View>;
            }
        }
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
                    <ModalView />
                </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
            
          </Modal>
        );
      }
}

const mapStateToProps = (state) => {
    return {
        templates: state.templates,
        initiates: state.initiates
    }
}

export default connect(mapStateToProps)(TmplModal);