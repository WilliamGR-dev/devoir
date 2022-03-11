import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './confirmCode.styles';

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
      index: ['first', 'second', 'third', 'four'],
    };
  }
  componentDidMount() {
    this.refs.first.focus();
  }

  changeInput = () => {};
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textSloganContent}>Confirmez votre numéro !</Text>
        <Text style={styles.textExplinationContent}>
          Entrez le code envoyé au +33
          {this.state.phone}
          {JSON.stringify(this.state.index[this.state.code.length])}
        </Text>
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
              this.state.code.length == 2 || this.state.code.length == 3
                ? this.setState({
                    first: false,
                    second: false,
                    third: false,
                    four: true,
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
      </View>
    );
  }
}

export default confirmCode;
