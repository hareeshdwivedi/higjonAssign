import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    // fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
  },
  eyeIconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIconStyle: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '60%',
  },
  registerText: {
    color: '#7F00FF',
  },
  formInputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailTextArea: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  emailImage: {
    height: 20,
    width: 20,
  },
  emailText: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default styles;
