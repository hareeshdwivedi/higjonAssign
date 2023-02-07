import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
const containerStyle = {
  borderRadius: 10,
  backgroundColor: '#ffffff',
  width: '80%',
};
const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  titleText: {
    fontSize: 30,
    color: '#7F00FF',
    fontWeight: '800',
  },
  container: {
    flex: 1,
    // position: 'absolute',
    // bottom: 0,
    marginTop: 25,
    // height: aut,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#7F00FF',
  },
  keyboardView: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    // marginTop: 50,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  nameContainer: {
    ...containerStyle,
  },
  emailContainer: {
    marginTop: 10,
    ...containerStyle,
  },
  passwordContainer: {
    ...containerStyle,
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 55,
  },
  registerLabel: {
    fontSize: 16,
    lineHeight: 22,
  },
  orContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
  },
  whiteLine: {
    backgroundColor: '#ffffff',
    height: 2,
    width: '45%',
  },
  orText: {
    color: '#ffffff',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '25%',
    marginTop: 10,
  },
  socialImage: {
    width: 17,
    height: 17,
  },
  socialImageContainer: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginText: {
    color: '#ffffff',
    paddingLeft: 15,
  },
  existingUserContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  alreadyHavingText: {
    color: 'yellow',
  },
  clickHereText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  registerButtonContainer: {
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  errorText: {
    color: '#ff0000',
    // alignSelf: 'center',
  },
});

export default styles;
