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
  AsyncStorage
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
  state = {showModal: false}
  async componentDidMount() {
    this.props.dispatch({
      type: "LOAD_MOCKDATA"
    });
    fetch("http://jani-test.azurewebsites.net/getmonsters", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      let monsters = JSON.parse(response._bodyText);
      this.props.dispatch(
        Actions.LOAD_MONSTERS(monsters)
      );
    }).catch(err => console.log(err));
    try {
      let templatesRaw = await AsyncStorage.getItem("InitiativeTemplates");
      let templates = JSON.parse(templatesRaw);
      if (!!templates) {
        this.props.dispatch(
          TmplActions.LOAD_TEMPLATES(templates)
        );
      }
    } catch (error) {
      console.log(error);
    }
    
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
    console.log(this.state.showModal);
    this.setState({showModal: !this.state.showModal});
  }

  render() {
   /*  const drawerView = (
      <View style={{
        flex: 1,
        backgroundColor: "#ff0000" }}>
        <Text>I'm in the drawer!</Text>
      </View>
    ); */
    //console.log([...this.props.initiates.init]);
    const sortedInitiates = this.sortInitiates([...this.props.initiates]);
 
    /* <AddModal showModal={this.state.showModal} toggleVisibility={this.toggleModalVisibility} />
    <Header drawer={this.drawer} save={this.toggleModalVisibility} />
    */
    return(
      <Drawer showModal={this.state.showModal} toggleModalVisibility={this.toggleModalVisibility}>
        
        <View style={styles.mainContainer}>
          
        
          <View style={{flex: 1, flexDirection: "column"}}>
            
            <View style={{flex: 5}}>
              
              <ScrollView >
                { (sortedInitiates.length > 0) ? sortedInitiates.map((item, index) => {
                    return <InitiateItem initiate={item} key={item.id} initiative={item.init} /> // prop initiative is necessary to force update on InitiateItem!
                  }): null}
                
              </ScrollView>
            </View>
            <View style={styles.rollContainer}>
              <Image
                style={{ height: 64, width: 64 }}
                source={require("../../images/d20.png")} />
              <TouchableOpacity 
                style={{
                  padding: 10,
                  borderRadius: 5 }}
                onPress={() => this.props.dispatch(Actions.ROLL_INITIATIVES())}>
                <Text>Roll for Initiative!</Text>
              </TouchableOpacity>
              <Image
                style={{ height: 64, width: 64 }}
                source={require("../../images/d20.png")} />
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