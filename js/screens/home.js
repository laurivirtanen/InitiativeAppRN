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
  ScrollView
} from 'react-native';
import {
  AdMobBanner
} from 'react-native-admob';
import { connect } from 'react-redux';
import AddModal from '../components/add-modal';
import InitiateItem from '../components/initiateItem';
import Header from '../components/header'
import * as Actions from '../actions/initiates';
import { RollD20 } from '../functions/functions';

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
const styles = StyleSheet.create({
  dev: {
    borderWidth: 1,
    borderStyle: "solid"
  }
});

class Home extends Component {
  static navigationOptions = { header: null } // No header displayed
  state = {showModal: false}
  componentDidMount() {
    this.props.dispatch({
      type: "LOAD_MOCKDATA"
    });
  }
  
  sortInitiates = (arr) => {
    if ((arr.length == 0)) {
      return [];
    }
    return arr.sort(function(a,b) {
			if (a.init === null || b.init === null){
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
    console.log("Firing");
    this.props.dispatch(Actions.SAVE_STATE_TO_JSON());
  }

  toggleModalVisibility = () => {
    console.log("Firing");
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    const drawerView = (
      <View style={{
        flex: 1,
        backgroundColor: "#ff0000" }}>
        <Text>I'm in the drawer!</Text>
      </View>
    );
    //console.log([...this.props.initiates.init]);
    const sortedInitiates = this.sortInitiates([...this.props.initiates]);
 
    return(
      <DrawerLayoutAndroid
        ref={(drawer) => this.drawer = drawer}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerView}>
        <AddModal showModal={this.state.showModal} toggleVisibility={this.toggleModalVisibility} />
        {/* HEADER */}
        <Header drawer={this.drawer} save={this.toggleModalVisibility} />
        {/* /HEADER */}
        <View style={{flex: 1, flexDirection: "row", borderStyle: "solid", borderWidth: 1}}>
          
        
          <View style={{flex: 1, flexDirection: "column", borderStyle: "solid", borderWidth: 1}}>
            
            <View style={{flex: 5}}>
              
              <ScrollView >
                { (sortedInitiates.length > 0) ? sortedInitiates.map((item) => {
                    return <InitiateItem initiate={item} key={item.id} initiative={item.init}/> // prop initiative is necessary to force update on InitiateItem!
                  }): null}
                
              </ScrollView>
            </View>
            <View style={{bottom: 0, 
              borderWidth: 1, 
              borderStyle: "solid", 
              flex: 1, 
              alignItems: "center",
              justifyContent: "center"}}>
              <TouchableOpacity 
                style={{
                  borderWidth: 1, 
                  borderStyle: "solid", 
                  padding: 10,
                  borderRadius: 5 }}
                onPress={() => this.props.dispatch(Actions.ROLL_INITIATIVES())}>
                <Text>Roll for Initiative!</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
        <View style={{alignItems: "center"}}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)} />
        </View>
      </DrawerLayoutAndroid>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    initiates: state.initiates
  }
};

export default connect(mapStateToProps)(Home);