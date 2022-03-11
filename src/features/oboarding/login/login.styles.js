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
  viewAction: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 40,
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
});

export default styles;
