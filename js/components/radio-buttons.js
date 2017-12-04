import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

import { styles } from '../styles/styles'

export default class RadioButtonGroup extends Component {
    /***********
     * Usage:
     * Give the class following props
     * - buttonNames: Array of button names
     * - callback: a function that handles returning index of the Array
     * - default: index of the wanted default button
     */
    state = {chosen: this.props.default, default: this.props.default}

    componentWillReceiveProps(nextProps) {
      if (nextProps != this.props) {
        this.setState({chosen: nextProps.default});
      }
    }
  
    handleSelectionChange = (index) => {
      this.setState({chosen: index}, () => this.props.callback(index));
    }

    selectStyle = (index) => {
      let style;
      if (index == this.state.chosen) {
        style = styles.radioChosen;
      } else {
        style = styles.radioButton;
      }

      if (index == 0) {
        return [style, styles.radioFirst];
      } else if (index == this.props.buttonNames.length -1) {
        return [style, styles.radioLast];
      }
      return style;
      
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
              <View style={this.selectStyle(index)}><Text style={styles.ButtonText}>{button}</Text></View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      );
    }
}
  
  