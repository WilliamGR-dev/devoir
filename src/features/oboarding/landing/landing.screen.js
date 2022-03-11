import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './landing.styles';
class Landing extends React.Component {
  showLogin = () => {
    this.props.navigation.navigate('login');
  };

  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.cajoo}
          source={require('../../../assets/cajoo.png')}
        />
        <Text style={styles.textSloganContent}>Vos courses en 3 clics !</Text>

        <View style={styles.viewAction}>
          <TouchableOpacity style={styles.buttonLogin} onPress={this.showLogin}>
            <Text style={styles.buttonLoginContent}>ME CONNECTER ✋</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDiscoveryApp}>
            <Text style={styles.buttonDiscoveryAppContent}>
              Découvrir l'app
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Landing;
