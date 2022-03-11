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
  viewPhoneInput: {
    fontSize: 14,
    marginBottom: 20,
    padding: 5,
    backgroundColor: 'rgba(160,160,160,0.20)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagPhoneInput: {
    width: 32,
    height: 32,
  },
  dropDownPhoneInput: {
    marginLeft: 10,
    width: 16,
    height: 16,
  },
  indicativePhoneInput: {
    marginLeft: 10,
  },
  inputPhoneInput: {
    width: '70%',
  },
  viewValidation: {
    width: '100%',
    alignSelf: 'center',
  },
  textConfirmation: {
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
  buttonCantValidate: {
    marginTop: 50,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.2)',
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
