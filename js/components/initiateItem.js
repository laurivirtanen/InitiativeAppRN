import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { UPDATE_INITIATE, REMOVE_INITIATE } from '../actions/initiates';


const InitiateItem = (props) => {  
  const { initiate, dispatch } = props;
  return (
    <View key={props.key}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1, 
        borderStyle: "solid",
        borderBottomWidth: initiate.showDetail? 0 : 1, 
        }}>
        <TouchableOpacity
          onPress={() => 
            dispatch(
              UPDATE_INITIATE(initiate.id, {showDetail: !initiate.showDetail})
            )}>
          <View >
            <Text>{initiate.name}</Text>
          </View>
        </TouchableOpacity>
        <Text style={{backgroundColor: 'blue', height: 30, width: 30}}>{props.initiative}</Text>
      </View>
      <View style={{display: initiate.showDetail? "flex" : "none", 
          flexDirection: 'row', 
          borderWidth: 1, 
          borderStyle: "solid",
          borderTopWidth: 0,
          justifyContent: "space-between"
        }}>
        <TouchableOpacity
          onPress={() => dispatch(REMOVE_INITIATE(initiate.id))}>
          <Text>Kill</Text>
        </TouchableOpacity>
        
        <Text>{initiate.adv}</Text>
      
      </View>
    
    </View>
  );
}




export default connect()(InitiateItem); 