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
          onPress={() => this.props.openDrawer()}>
          <Image
            style={{ height: 30, width: 30, alignSelf: 'center', marginLeft: 8 }}
            source={require("../../images/hamburger.png")} />
            {/* <Text style={styles.headerButtonText}>List</Text> */}
        </TouchableNativeFeedback>
        <Text style={ styles.headerText }>D&D Tracker</Text>
        <TouchableNativeFeedback
          style={styles.headerButton}
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.save()}>
          <Image
            style={[...styles.initiateImage, { height: 40, width: 40, alignSelf: 'center', marginRight: 8 }]}
            source={require("../../images/add.png")} />
            {/* <Text style={styles.headerButtonText}>+</Text> */}
        </TouchableNativeFeedback>
      </View>
    );
  }
}
