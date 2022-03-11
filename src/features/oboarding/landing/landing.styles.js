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
  cajoo: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
  },
  viewAction: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 40,
  },
  textSloganContent: {
    marginTop: 50,
    alignSelf: 'center',
    color: '#424242',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 100,
  },
  buttonLogin: {
    marginTop: 50,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    borderRadius: 12,
  },
  buttonLoginContent: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDiscoveryApp: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonDiscoveryAppContent: {
    textDecorationLine: 'underline',
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
