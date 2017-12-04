import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
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
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Main' }));
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
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading...</Text>
            </View>
        )
    }
}

export default connect()(LoadingScreen);