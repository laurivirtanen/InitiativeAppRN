import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'
import { styles } from '../styles/styles';
export default class Header extends Component {
  render() {
    return (
      <View style={ styles.headerContainer }>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.drawer.openDrawer()}>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>List</Text>
          </View>

        </TouchableNativeFeedback>
        <Text style={ styles.headerButtonText }>D&D Tracker </Text>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.save()} >
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>+</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
