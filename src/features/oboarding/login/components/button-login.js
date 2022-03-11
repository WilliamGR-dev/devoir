import * as React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export const ButtonLogin = ({
  icon = '',
  title = '',
  background = '',
  color = '',
  border = 0,
  functionOnPress = () => {
    return false;
  },
}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.buttonLogin(background, border)]}
        onPress={functionOnPress}>
        <Image style={styles.icon} source={icon} />
        <Text style={[styles.buttonLoginContent(color)]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLogin: (background, border) => {
    return {
      marginTop: 20,
      bottom: 20,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: background,
      flexDirection: 'row',
      width: '100%',
      height: 50,
      borderRadius: 12,
      borderColor: '#000',
      borderWidth: border,
    };
  },
  buttonLoginContent: color => {
    return {
      color: color,
      fontWeight: 'bold',
      fontSize: 18,
    };
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});

export default ButtonLogin;
