import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    TouchableNativeFeedback,
    Picker
} from 'react-native';
import AddModal from './add-modal';
import TmplModal from './tmpl-modal';
import SaveModal from './save-modal';
import Header from './header';
import { styles } from '../styles/styles';
import { connect } from 'react-redux';
import * as InitActions from '../actions/initiates';
import * as TmplActions from '../actions/templates';


class Drawer extends Component {
  state = { selectedTemplate: 0, showModal: false, showSaveModal: false, action: 'load' }

  saveTemplate = () => {
    console.log("Saving template...");
    this.setState({showSaveModal: true});
    /* this.props.dispatch(
      TmplActions.SAVE_TEMPLATE("TEST", this.props.initiates)
    ); */
  }
  loadTemplate = () => {
    console.log("Loading template...");
    this.setState({showModal: true, action: 'load'});
    /* let newItems = this.props.templates[this.state.selectedTemplate].values;
    if (!!newItems) {
      this.props.dispatch(
        InitActions.SET_FROM_TEMPLATE(newItems)
      );
    } */
  }
  deleteTemplate = () => {
    console.log("Deleting template...");
    this.setState({showModal: true, action: 'delete'});
  }
  changeTemplate = (index) => {
    this.setState({selectedTemplate: index});
  }
  toggleTmplModalVisibility = () => {
    this.setState({showModal: !this.state.showModal});
  }
  toggleSaveModalVisibility = () => {
    this.setState({showSaveModal: !this.state.showSaveModal});
  }
  openDrawer = () => {
    this.drawer.openDrawer();
  }
  closeDrawer = () => {
    this.drawer.closeDrawer();
  }

  render() {
    const drawerView = (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerHeaderContainer}></View>
        <TouchableNativeFeedback
          onPressOut={this.saveTemplate} >
          <View style={styles.ButtonSecondary}>
            <Text style={styles.ButtonTextSecondary}>Save as template</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={{borderTopWidth: 1, borderBottomWidth: 1}}>
          <Picker 
            ref={(templatePicker) => this.templatePicker = templatePicker} 
            enabled={this.props.templates.length < 1 ? false : true}
            style={{marginLeft: 8}}
            mode="dropdown"
            prompt="Templates"
            selectedValue={this.state.selectedTemplate}
            onValueChange={item => this.changeTemplate(item)} >
            {this.props.templates.length < 1 ? <Picker.Item label="None" /> : this.props.templates.map((item, index) => {
              return (
                <Picker.Item key={index} label={item.name} value={index} />
              );
            })}
          </Picker>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableNativeFeedback
            onPressOut={this.loadTemplate} >
            <View style={styles.ButtonSecondary}>
              <Text style={styles.ButtonTextSecondary}>Load</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPressOut={this.deleteTemplate} >
            <View style={styles.ButtonSecondary}>
              <Text style={styles.ButtonTextSecondary}>Delete</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
    return(
      <DrawerLayoutAndroid
        ref={(drawer) => this.drawer = drawer}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerView}>
        <AddModal showModal={this.props.showModal} toggleVisibility={this.props.toggleModalVisibility} />
        <TmplModal 
          showModal={this.state.showModal} 
          toggleVisibility={this.toggleTmplModalVisibility} 
          action={this.state.action} 
          templateIndex={this.state.selectedTemplate} 
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer} />
        <SaveModal 
          showModal={this.state.showSaveModal} 
          toggleVisibility={this.toggleSaveModalVisibility} 
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer} />
        <Header openDrawer={this.openDrawer} save={this.props.toggleModalVisibility} />
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initiates: state.initiates,
    templates: state.templates
  }
}

export default connect(mapStateToProps)(Drawer);