import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    TouchableNativeFeedback,
    Picker
} from 'react-native';
import AddModal from './add-modal';
import Header from './header';
import { styles } from '../styles/styles';
import { connect } from 'react-redux';
import * as InitActions from '../actions/initiates';
import * as TmplActions from '../actions/templates';


class Drawer extends Component {
  state = { selectedTemplate: 0 }

  saveTemplate = () => {
    console.log(this.props.initiates);
    this.props.dispatch(
      TmplActions.SAVE_TEMPLATE("TEST", this.props.initiates)
    );
    console.log(this.props.templates);
  }
  loadTemplate = () => {
    let newItems = this.props.templates[this.state.selectedTemplate].values;
    if (!!newItems) {
      this.props.dispatch(
        InitActions.SET_FROM_TEMPLATE(newItems)
      );
    }
    
  }
  changeTemplate = (index) => {
    this.setState({selectedTemplate: index});
  }

  render() {
    const drawerView = (
      <View style={styles.drawerContainer}>
        <Text>I'm in the drawer!</Text>
        <TouchableNativeFeedback
          onPressOut={this.saveTemplate} >
          <View>
            <Text>Save as template</Text>
          </View>
        </TouchableNativeFeedback>
        
        <Picker 
          ref={(templatePicker) => this.templatePicker = templatePicker} 
          enabled={this.props.templates.length < 1 ? false : true}
          onValueChange={item => this.changeTemplate(item)} >
          {this.props.templates.length < 1 ? <Picker.Item label="None" /> : this.props.templates.map((item, index) => {
            return (
              <Picker.Item key={index}label={item.name} value={index} />
            );
          })}
        </Picker>
        <TouchableNativeFeedback
          onPressOut={this.loadTemplate} >
          <View>
            <Text>Load template</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
    return(
      <DrawerLayoutAndroid
        ref={(drawer) => this.drawer = drawer}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerView}>
        <AddModal showModal={this.props.showModal} toggleVisibility={this.props.toggleModalVisibility} />
        <Header drawer={this.drawer} save={this.props.toggleModalVisibility} />
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initiates: state.initiates,
    templates: state.templates,
    nav: state.nav
  }
}

export default connect(mapStateToProps)(Drawer);