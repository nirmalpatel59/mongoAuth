import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import { Button, CardSection } from './components/common';

class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login Page'
    };

    render() {
        return (
            <View>
                <LoginForm navigator={this.props.navigation}/>
            </View>
        );
    };
}

class HomePage extends Component {
    static navigationOptions = {
        title: 'Home Page'
    }
    render() {
        return (
            <View>
                <Text>Welcome</Text>
            </View>
        );
    }
}

const App = StackNavigator({
    Login: { screen : LoginPage},
    Home: { screen: HomePage }
});
export default App;