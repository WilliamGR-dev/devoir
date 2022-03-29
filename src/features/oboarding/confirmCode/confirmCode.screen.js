import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './confirmCode.styles';
import {Auth} from 'aws-amplify';

class confirmCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: this.props.route.params.phone,
      code: '',
      first: false,
      second: false,
      third: false,
      four: false,
      five: false,
      six: false,
      index: ['first', 'second', 'third', 'four', 'five', 'six'],
    };
  }
  componentDidMount() {
    this.refs.first.focus();
  }

  checkCode = async () => {
    try {
      const response = await Auth.confirmSignUp(
        '+33' + this.state.phone,
        this.state.code,
      );
      console.log('response:', JSON.stringify(response));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  changeInput = () => {};
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textSloganContent}>Confirmez votre numéro !</Text>
        <Text style={styles.textExplinationContent}>
          Entrez le code envoyé au +33
          {this.state.phone}
        </Text>
        <Text>Votre Code est : {this.state.code}</Text>
        <View style={styles.viewNumberInput}>
          <TextInput
            ref="first"
            style={
              this.state.first
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            maxLength={1}
            onFocus={() =>
              this.state.code.length == 0
                ? this.setState({
                    first: true,
                    second: false,
                    third: false,
                    four: false,
                    five: false,
                    six: false,
                  })
                : this.refs.this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.refs.second.focus();
              this.setState({code: this.state.code + val});
            }}
          />
          <TextInput
            ref="second"
            style={
              this.state.second
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            maxLength={1}
            onFocus={() =>
              this.state.code.length == 1
                ? this.setState({
                    first: false,
                    second: true,
                    third: false,
                    four: false,
                    five: false,
                    six: false,
                  })
                : this.refs.$this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.refs.third.focus();
              this.setState({code: this.state.code + val});
            }}
          />
          <TextInput
            ref="third"
            style={
              this.state.third
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            maxLength={1}
            onFocus={() =>
              this.state.code.length == 2
                ? this.setState({
                    first: false,
                    second: false,
                    third: true,
                    four: false,
                    five: false,
                    six: false,
                  })
                : this.refs.$this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.refs.four.focus();
              this.setState({code: this.state.code + val});
            }}
          />
          <TextInput
            ref="four"
            style={
              this.state.four
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            onFocus={() =>
              this.state.code.length == 3
                ? this.setState({
                    first: false,
                    second: false,
                    third: false,
                    four: true,
                    five: false,
                    six: false,
                  })
                : this.refs.$this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.setState({code: this.state.code + val});
            }}
            maxLength={1}
          />
          <TextInput
            ref="five"
            style={
              this.state.five
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            onFocus={() =>
              this.state.code.length == 4
                ? this.setState({
                    first: false,
                    second: false,
                    third: false,
                    four: false,
                    five: true,
                    six: false,
                  })
                : this.refs.$this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.setState({code: this.state.code + val});
            }}
            maxLength={1}
          />

          <TextInput
            ref="six"
            style={
              this.state.six
                ? styles.inputNumberInputSelected
                : styles.inputNumberInput
            }
            keyboardType="numeric"
            onFocus={() =>
              this.state.code.length == 5 || this.state.code.length == 6
                ? this.setState({
                    first: false,
                    second: false,
                    third: false,
                    four: false,
                    five: false,
                    six: true,
                  })
                : this.refs.$this.state.index[this.state.code.length].focus()
            }
            onChangeText={val => {
              this.setState({code: this.state.code + val});
            }}
            maxLength={1}
          />
        </View>
        <View style={styles.viewResendCode}>
          <Text style={styles.textResendCode}>
            Vous n'avez pas reçu le code ?{' '}
            <Text style={styles.textImportant}>Renvoyer</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonValidate}
          onPress={this.checkCode}>
          <Text style={styles.buttonValidateContent}>CONTINUER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default confirmCode;
