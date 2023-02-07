import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
    console.log(disabled,'disabled')
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={[styles.registerButton, contentContainerStyle]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.registerText, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
