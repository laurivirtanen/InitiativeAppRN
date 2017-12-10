import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableNativeFeedback,
  ScrollView,
  Image,
  AsyncStorage,
  Alert
} from 'react-native';
import {
  AdMobBanner
} from 'react-native-admob';
import { connect } from 'react-redux';

import InitiateItem from '../components/initiateItem';

import * as Actions from '../actions/initiates';
import * as TmplActions from '../actions/templates';
import { RollD20 } from '../functions/functions';
import Drawer from '../components/drawer';
import { styles } from '../styles/styles';

/* Delegating functions to header in React Navigation

static navigationOptions = ({ navigation }) => ({
  header: (
    <Component onClick={navigation.state.params.wantedAction}/>
  )
});
componentDidMount() {
  this.props.navigation.setParams({wantedAction: wantedFunction})
}
*/


class Home extends Component {
  static navigationOptions = { header: null } // No header displayed
  state = { showModal: false, highlightIndex: null }

  sortInitiates = (arr) => {
    if ((arr.length == 0)) {
      return [];
    }
    return arr.sort(function (a, b) {
      if (a.init === null || b.init === null) {
        return 0;
      }
      if (b.init === a.init) {
				/* if (b.mod === a.mod) {
						return (RollD20() > 10) ? -1 : 1;
				} */
        return b.mod - a.mod;
      }
      return b.init - a.init;
    });
  }

  // Save this for later use!
  save = () => {
    this.props.dispatch(Actions.SAVE_STATE_TO_JSON());
  }

  toggleModalVisibility = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  changeInitiativeManually = (value, index) => {
    let obj = { init: Number(value) }
    this.props.dispatch(Actions.UPDATE_INITIATE(index, obj));
  }


  changeFocusedInitiative = (listLength,increment) => {
    console.log("Next Initiative ");
    try{
      if(this.state.highlightIndex != null){
        if (this.state.highlightIndex+increment >= listLength || this.state.highlightIndex+increment < 0){
          this.setState({ highlightIndex: 0 });
          this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
        }else{
          this.setState({ highlightIndex: this.state.highlightIndex+increment});
          this.scrollView.scrollTo({ x: 0, y: (this.state.highlightIndex*50)-153, animated: true });
          console.log(this.state.highlightIndex*50);
          
          }
      }
    }catch(error){
      console.log(error);
    }
  }

  rollButton = (hlindex) => {
    console.log(hlindex+" " + this.state.highlightIndex);
    if(hlindex==null){
      this.props.dispatch(Actions.ROLL_INITIATIVES());
      this.setState({ highlightIndex: 0 });
      this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
    }else {
      Alert.alert(
        'Rerolling',
        'Do you want to reroll again?',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => this.rollButton(null)},
        ],
      );
    }

  }

  render() {
    const sortedInitiates = this.sortInitiates([...this.props.initiates]);
    
    return (
      <Drawer showModal={this.state.showModal} toggleModalVisibility={this.toggleModalVisibility}>
        <View style={styles.mainContainer}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 5 }}>
              <ScrollView ref={ref=>this.scrollView=ref}>
                {(sortedInitiates.length > 0) ? sortedInitiates.map((item, index) => {
                  return <InitiateItem initiate={item} key={item.id} initiative={item.init} highlight={index == this.state.highlightIndex ? true : false} changeInitiative={this.changeInitiativeManually} /> // prop initiative is necessary to force update on InitiateItem!
                }) : null}
              </ScrollView>
            </View>
            <View style={[styles.headerContainer, { bottom: 0, display: 'flex' }]}>
              <TouchableOpacity
                style={[styles.headerButton, { left: 0}]}
                onPress={() => this.changeFocusedInitiative(sortedInitiates.length,-1)}>
                <Image
                  style={[styles.headerButton, { height: 56, width: 56, margin:2}]}
                  source={this.state.highlightIndex == null ? require("../../images/d20s.png") : require("../../images/leftArrow.png")} />
              </TouchableOpacity>

              <TouchableOpacity
                onPressOut={() => this.rollButton(this.state.highlightIndex)}>
                <View style={[styles.ButtonRoll, {overflow:'hidden'}]}>
                  <Text style={styles.rollButtonText}>Roll for Initiative</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.headerButton, { right: 0  }]}
                onPressOut={() => this.changeFocusedInitiative(sortedInitiates.length,1)}>
                <Image
                  style={[styles.headerButton, { height: 56, width: 56,margin:2 }]}
                  source={this.state.highlightIndex == null ? require("../../images/d20s.png") : require("../../images/rightArrow.png")} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={{ alignItems: 'center' }} >
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)} />
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initiates: state.initiates
  }
};

export default connect(mapStateToProps)(Home);