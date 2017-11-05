import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { UPDATE_INITIATE, REMOVE_INITIATE } from '../actions/initiates';
import { styles } from '../styles/styles';

const InitiateItem = (props) => {
  const { initiate, dispatch } = props;
  return (
    <View key={props.key}>
      <View style={styles.listContainer}>
        <Image
          style={styles.initiateImage}
          source={{uri: 'http://student.labranet.jamk.fi/~K8455/i1.png'}}
        />
        <TouchableOpacity
          onPress={() =>
            dispatch(
              UPDATE_INITIATE(initiate.id, {showDetail: !initiate.showDetail})
            )}>

          <View style={ styles.initiateName } >
            <Text style={{textAlign: 'center'}}>{initiate.name}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.initiateRoll}>{props.initiative}</Text>
      </View>
      <View style={  styles.initiateDropdown, { display: initiate.showDetail? "flex" : "none"}
        }>
        <View style={ styles.initiateKill }>
          <TouchableOpacity
            onPress={() => dispatch(REMOVE_INITIATE(initiate.id))}>
            {/* TODO change initiateTextKill to icon what represents Killing the creature */}
            <Image
              style={styles.initiateImage}
              source={{uri: 'http://student.labranet.jamk.fi/~K8455/iKill.png'}}
            />
          </TouchableOpacity>
        </View>
        <Text>{initiate.adv}</Text>
      </View>

    </View>
  );
}




export default connect()(InitiateItem);
