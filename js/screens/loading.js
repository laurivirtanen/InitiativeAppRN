import React, { Component } from 'react'
import { View, Text, AsyncStorage, ImageBackground, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import * as Actions from '../actions/initiates'
import * as TmplActions from '../actions/templates'


let timer;

class LoadingScreen extends Component {
    static navigationOptions = { header: null }

    async componentDidMount() {
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
        }).catch(err => {
            console.log(err);
            ToastAndroid.show("Could not connect to database", ToastAndroid.SHORT);
        }).finally(() => {
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Main' }));
        });
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
    
    render() {
        return (
            <ImageBackground source={require("../../images/loading2.png")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </ImageBackground>
        )
    }
}

export default connect()(LoadingScreen);