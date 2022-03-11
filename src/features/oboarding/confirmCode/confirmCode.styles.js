import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  textSloganContent: {
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#424242',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
  },
  textExplinationContent: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#424242',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
  },
  viewNumberInput: {
    fontSize: 14,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputNumberInput: {
    borderRadius: 12,
    margin: 5,
    padding: 20,
    backgroundColor: 'rgba(160,160,160,0.20)',
    width: '22%',
    textAlign: 'center',
  },
  inputNumberInputSelected: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 12,
    margin: 5,
    padding: 20,
    backgroundColor: 'rgba(160,160,160,0.20)',
    width: '22%',
    textAlign: 'center',
  },
  viewResendCode: {
    width: '100%',
    alignSelf: 'center',
  },
  textResendCode: {
    textAlign: 'center',
  },
  textImportant: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  buttonValidate: {
    marginTop: 50,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    borderRadius: 12,
  },
  buttonValidateContent: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
