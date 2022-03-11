import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './login.styles';

import {ButtonLogin} from './components/button-login';
class Login extends React.Component {
  showLanding = () => {
    this.props.navigation.navigate('landing');
  };
  showCall = () => {
    this.props.navigation.navigate('call');
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textSloganContent}>
          Connectez vous simplement !
        </Text>
        <ButtonLogin
          title={'Continuer avec Facebook'}
          icon={require('../../../assets/facebook.png')}
          background="blue"
          color="white"
        />
        <ButtonLogin
          title={'Continuer avec Google'}
          icon={require('../../../assets/google.png')}
          background="grey"
          color="black"
          border={1}
        />
        <ButtonLogin
          title={'Avec votre numéro !'}
          icon={require('../../../assets/call.png')}
          background="red"
          color="white"
          functionOnPress={this.showCall}
        />
      </View>
    );
  }
}

export default Login;
