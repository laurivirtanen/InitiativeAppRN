import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'

export default class RadioButtonGroup extends Component {
    /***********
     * Usage:
     * Give the class following props
     * - buttonNames: Array of button names
     * - callback: a function that handles returning index of the Array
     * - default: index of the wanted default button
     */
    state = {chosen: !!this.props.default? this.props.default : null}
  
    handleSelectionChange = (index) => {
      // console.log(index);
      this.setState({chosen: index}, () => this.props.callback(index));
    }
  
    render() {
      return (
        <View style={{flexDirection: "row"}}>
          {this.props.buttonNames.map((button, index)=> {
            // console.log(this.state.chosen);
            return (
              <TouchableWithoutFeedback
                key={index}
                onPressOut={this.handleSelectionChange.bind(null, index)}>
              <View style={index === this.state.chosen ? styles.chosen : styles.button}><Text>{button}</Text></View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
button: {
    backgroundColor: "#f00",
    flex: 1
},
chosen: {
    backgroundColor: "#ff0",
    flex: 1
}
});
  