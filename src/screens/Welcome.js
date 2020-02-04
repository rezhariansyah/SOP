import React from 'react';
import {View, Image, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

export class Welcome extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.push('Home');
    }, 2000);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 200, height: 155}}
        />
        <ActivityIndicator size="large" color="red" style={{margin: 10}} />
      </View>
    );
  }
}

export default withNavigation(Welcome);
