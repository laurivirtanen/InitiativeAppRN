import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={{height: 60, flexDirection: "row", justifyContent: "space-between", borderStyle: "solid", borderWidth: 1}}>
        <TouchableNativeFeedback 
          useForeground
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.drawer.openDrawer()}>
          <View style={{width: 60, margin: 8, borderWidth: 1, borderStyle: "solid", backgroundColor: 'red'}}>
            <Text>Moi</Text>
          </View>
          
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          useForeground 
          background={TouchableNativeFeedback.Ripple('white')}
          onPress={() => this.props.save()} >
          <View style={{width: 60, margin: 8, borderWidth: 1, borderStyle: "solid", backgroundColor: 'red'}}>
            <Text>Moi</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}