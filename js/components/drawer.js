import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text
} from 'react-native';
import AddModal from './add-modal';
import Header from './header';
import { connect } from 'react-redux';
import TmplActions from '../actions/templates';

class Drawer extends Component {

  render() {
    const drawerView = (
      <View style={{
        flex: 1,
        backgroundColor: "#ff0000" }}>
        <Text>I'm in the drawer!</Text>
      </View>
    );
    return(
      <DrawerLayoutAndroid
        ref={(drawer) => this.drawer = drawer}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerView}>
        <AddModal showModal={this.props.showModal} toggleVisibility={this.props.toggleModalVisibility} />
        {/* HEADER */}
        <Header drawer={this.drawer} save={this.props.toggleModalVisibility} />
        {/* /HEADER */}
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

export default connect()(Drawer);