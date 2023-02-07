import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={styles.eyeIconContainerStyle} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.eyeIconStyle, iconStyle]}
      />
    </TouchableOpacity>
  );
};
export default IconButton;
