import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Picker,
  CheckBox
} from 'react-native';
import { UPDATE_INITIATE, REMOVE_INITIATE } from '../actions/initiates';
import { styles } from '../styles/styles';

const InitiateItem = (props) => {
  const { initiate, dispatch } = props;
  return (
    <View key={props.key}>
      <TouchableOpacity
      onPress={() =>
        dispatch(
          UPDATE_INITIATE(initiate.id, {showDetail: !initiate.showDetail})
      )}>
        <View style={styles.listContainer}>
        

          <Image
            style={styles.initiateImage}
            source={{uri: 'http://student.labranet.jamk.fi/~K8455/i1.png'}}
          />
          

            <View style={ styles.initiateName } >
              <Text  style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>{initiate.name}</Text>
            </View>

            <View style={styles.initiateRoll}>
              <TouchableOpacity
              >
              <TextInput
              
              maxLength={2}
              multiline={false}
              
               keyboardType='numeric' >{props.initiative}</TextInput>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.initiateDropdown, { display: initiate.showDetail? "flex" : "none"}]}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text>Mod:</Text>
          <TextInput 
            keyboardType="numeric" 
            defaultValue={initiate.mod.toString()} 
            style={{flex: 1, textAlign: 'center'}}
            onEndEditing={(event) => {
              console.log(event.nativeEvent.text);
              dispatch(
                UPDATE_INITIATE(initiate.id, {mod: Number(event.nativeEvent.text)})
              );
            }} />
        </View>
        <Picker 
          selectedValue={initiate.adv} 
          style={{flex: 2}}
          onValueChange={(item) => {
            console.log(item);
            dispatch(
              UPDATE_INITIATE(initiate.id, {adv: item})
            );
          }} >
          <Picker.Item label="Normal" value="normal" />
          <Picker.Item label="Advantage" value="adv" />
          <Picker.Item label="Disadvantage" value="disadv" />
        </Picker>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text>PC: </Text>
          <CheckBox value={initiate.isPC} style={{flex: 1}} onValueChange={(item) => {
            console.log(item);
            dispatch(
              UPDATE_INITIATE(initiate.id, {isPC: item})
            );
          }} />
        </View>
        
        <View style={styles.initiateKill}>
        <TouchableOpacity
          onPress={() => dispatch(REMOVE_INITIATE(initiate.id))}>
          
          <Image
            style={styles.initiateImage}
            source={{uri: 'http://student.labranet.jamk.fi/~K8455/iKill.png'}}
          />
        </TouchableOpacity>
      </View>
      </View>

    </View>
  );
}




export default connect()(InitiateItem);
