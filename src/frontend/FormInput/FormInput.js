import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import index from '../assets/icons';
import styles from './styles';

const FormInput = ({
  containerStyle,
  placeholder,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
  image,
  displayName,
  isfromRegisterScreen,
  imageStyle,
}) => {
  console.log(onChange, 'onchange', value, 'value');
  return (
    <View
      style={!isfromRegisterScreen ? styles.formInputArea : styles.marginTop}>
      <View style={styles.emailTextArea}>
        <Image source={image} style={[styles.emailImage, imageStyle]} />
        <Text style={styles.emailText}>{displayName}</Text>
      </View>
      <View style={{...containerStyle}}>
        <View style={styles.formInput}>
          {/* {prependComponent} */}
          <TextInput
            style={styles.textInput}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onChangeText={text => onChange(text)}
            onPressIn={onPress}
            editable={editable}
          />
          {appendComponent}
        </View>
      </View>
    </View>
  );
};
export default FormInput;
