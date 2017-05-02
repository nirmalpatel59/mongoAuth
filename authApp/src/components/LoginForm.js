import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Spinner, Button, Input } from './common'
import axios from 'axios';

class LoginForm extends Component {
    state = { email: '', password: '', errorText: '', loading: false };
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ errorText: '', loading: true });
        
        axios.post('http://192.168.4.225:5000', {
            email: email,
            password: password
        }).then(response => {
            console.log(response);
            this.setState({ errorText: response.data, loading: false });
        })
        .catch(response => {
            console.log(response);
            this.setState({ errorText: response.data, loading: false });
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}> Log In</Button>
        )
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', errorText: '', loading: false });
    }

    onLoginFail() {
        this.setState({ errorText: 'Authentication Failed.', loading: false })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder='password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text>{this.state.errorText}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;