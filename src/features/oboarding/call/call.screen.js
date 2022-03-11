import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import styles from './call.styles';
import {validateFrenchPhoneNumber} from './call.helpers';

class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      canGo: false,
    };
  }
  onChangePhoneNumber = phone => {
    let canGo = false;
    this.setState({
      phone,
    });
    if (phone.length == 10 && phone.charAt(0) == 0) {
      phone = phone.substring(1);
      this.setState({
        phone,
      });
      if (validateFrenchPhoneNumber('+33' + phone)) {
        canGo = true;
      }
    }
    if (phone.length == 9) {
      this.setState({
        phone,
      });
      if (validateFrenchPhoneNumber('+33' + phone)) {
        canGo = true;
      }
    }
    this.setState({
      canGo,
    });
  };
  showConfirmCode = () => {
    if (this.state.canGo) {
      this.props.navigation.navigate('confirmCode', {
        phone: this.state.phone,
      });
    } else {
      Alert.alert('Erreur', 'Mettez un numéro valide', [{text: 'Pardon'}]);
    }
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textSloganContent}>Quel est votre numéro ?</Text>
        <Text style={styles.textExplinationContent}>
          Pour que notre livreur puisse vous contacter 😄
        </Text>
        <View style={styles.viewPhoneInput}>
          <Image
            style={styles.flagPhoneInput}
            source={require('../../../assets/france.png')}
          />
          <Image
            style={styles.dropDownPhoneInput}
            source={require('../../../assets/down.png')}
          />
          <Text style={styles.indicativePhoneInput}>+33</Text>
          <TextInput
            style={styles.inputPhoneInput}
            keyboardType="numeric"
            onChangeText={phone => this.onChangePhoneNumber(phone)}
            value={this.state.phone}
          />
        </View>
        <View style={styles.viewValidation}>
          <Text style={styles.textConfirmation}>
            En cliquant sur "CONTINUER",vous acceptez la{' '}
            <Text style={styles.textImportant}>
              Politique de Confidentialé,
            </Text>
            les <Text style={styles.textImportant}>CGU</Text> et les{' '}
            <Text style={styles.textImportant}>CGV</Text> de Cajoo.
          </Text>
          <TouchableOpacity
            style={
              this.state.canGo
                ? styles.buttonValidate
                : styles.buttonCantValidate
            }
            onPress={this.showConfirmCode}>
            <Text style={styles.buttonValidateContent}>CONTINUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Call;
