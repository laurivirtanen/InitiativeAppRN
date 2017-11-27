import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity
} from 'react-native'
import { styles } from '../styles/styles';
export default class Header extends Component {
  render() {
    return (
      <View style={ styles.headerContainer }>
        <TouchableNativeFeedback
          style={styles.headerButton}
          useForeground
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.drawer.openDrawer()}>
          <Image
            style={{ height: 60, width: 60, marginLeft: 4, marginTop: 2, marginBottom:2 }}
            source={require("../../images/hamburger.png")} />
            {/* <Text style={styles.headerButtonText}>List</Text> */}
        </TouchableNativeFeedback>
        <Text style={ styles.headerText }>D&D Tracker</Text>
        <TouchableNativeFeedback
          style={styles.headerButton}
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.save()}>
          <Image
            style={[...styles.initiateImage, { height: 64, width: 64, marginRight: 0 }]}
            source={require("../../images/add.png")} />
            {/* <Text style={styles.headerButtonText}>+</Text> */}
        </TouchableNativeFeedback>
      </View>
    );
  }
}
