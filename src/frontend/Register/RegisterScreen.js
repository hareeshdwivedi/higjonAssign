import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {Shadow} from 'react-native-shadow-2';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import index from '../assets/icons';
import FormInput from '../FormInput/FormInput';
import IconButton from '../FormInput/IconButton';
import TextButton from '../FormInput/TextButton';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {useDispatch, useSelector} from 'react-redux';
import {USER_SIGNUP} from '../Redux/Constants/Constants';
import userAction from '../Redux/Actions/userActions';

export default function RegisterScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const isFromGoogle = 'Google';
  const isFromFacebook = 'Facebook';
  const isFromApple = 'Apple';
  console.log(name, 'name');
  const dispatch = useDispatch();
  // const userData = {
  //   name: name,
  //   email: email,
  //   userId: userId,
  //   password: password,
  // };

  const users = useSelector(state => console.log(state, 'state in register'));
  console.log(users, 'users');
  const [showErrorMessage, setShowErrorMessage] = React.useState('');
  const checkIfAnyFieldNotEntered =
    name !== '' && email !== '' && userId !== '' && password !== '';

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const sendUserDetails = () => {
    console.log('inside senduserfun');
    dispatch(userAction(name, email, userId, password, dispatch));
    fetch('http://locahost:3000/signup', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, name, password, userId}),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.error) {
          // alert('Invalid Credentials')
          setShowErrorMessage(data.error);
        } else {
          // console.log(data.udata);
          alert(data.message);
          navigation.navigate('SignIn');
        }
      });
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log(userInfo, 'userinfo');
      navigation.navigate('Location', {
        userName: userInfo?.user?.givenName,
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  const facebookLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // console.log(auth().signInWithCredential(facebookCredential), 'result test');
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };
  const renderSocialSignin = (icon, displayText, isFrom) => {
    return (
      <TouchableOpacity
        style={styles.socialLoginContainer}
        onPress={() => {
          if (isFrom === 'Google') {
            googleLogin();
          }
          if (isFrom === 'Facebook') {
            facebookLogin().then(res => {
              console.log(res);
              navigation.navigate('Location', {
                userName: res?.additionalUserInfo?.profile?.first_name,
              });
            });
            console.log('from facebook');
          }
        }}>
        <View style={styles.socialImageContainer}>
          <Image source={icon} style={styles.socialImage} />
        </View>
        <Text style={styles.socialLoginText}>{displayText}</Text>
      </TouchableOpacity>
    );
  };

  const renderExistingUserLink = () => {
    return (
      <View style={styles.existingUserContainer}>
        <Text style={styles.alreadyHavingText}>Already having an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.clickHereText}>Click here to signin</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderSignInContainer = () => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        // keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={-300}
        contentContainerStyle={styles.keyboardView}>
        <View style={styles.container}>
          <FormInput
            containerStyle={styles.nameContainer}
            placeholder="Name"
            onChange={text => {
              setName(text);
            }}
            value={name}
            image={index.bag}
            displayName="Name"
            isfromRegisterScreen={true}
          />
          <FormInput
            containerStyle={styles.emailContainer}
            placeholder="Email"
            value={email}
            onChange={text => setEmail(text)}
            image={index.email}
            displayName="Email"
          />

          <FormInput
            containerStyle={styles.emailContainer}
            placeholder="User Id"
            value={userId}
            onChange={text => setUserId(text)}
            image={index.user}
            displayName="UserID"
          />
          <FormInput
            containerStyle={styles.passwordContainer}
            placeholder="password"
            value={password}
            secureTextEntry={!showPassword}
            onChange={text => setPassword(text)}
            appendComponent={
              <IconButton
                icon={showPassword ? index.eye_off : index.eye}
                iconStyle={{
                  tintColor: '#999999',
                }}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
            image={index.lock}
            displayName="Password"
          />
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorText}>{showErrorMessage}</Text>
          </View>
          <View style={styles.registerButtonContainer}>
            <TextButton
              contentContainerStyle={styles.registerButton}
              label="REGISTER NOW"
              labelStyle={styles.registerLabel}
              onPress={() => {
                if (!checkIfAnyFieldNotEntered) {
                  setShowErrorMessage('Please Enter All Details');
                  // if (isNameEmpty) {
                  //   setNameErrorMsg('Please enter your Name');
                  // }
                  // if (isEmailEmpty) {
                  //   setEmailErrorMsg('Please enter your email');
                  // }
                  // if (isUserIdEmpty) {
                  //   setUserIdErrorMsg('Please enter your User Id');
                  // }
                  // if (isPaaswordEmpty) {
                  //   setPasswordErrorMsg('Please enter your password');
                  // }
                } else {
                  sendUserDetails();
                  navigation.navigate('SignIn');
                  setName('');
                  setEmail('');
                  setUserId('');
                  setPassword('');
                  // navigation.navigate('SignIn', {
                  //   userData,
                  // });
                }
              }}
            />
          </View>

          <View style={styles.orContainer}>
            <View style={styles.whiteLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.whiteLine} />
          </View>
          {renderSocialSignin(
            index.google,
            'Sign up with Google',
            isFromGoogle,
          )}
          {renderSocialSignin(
            index.facebook,
            'Sign up with FaceBook',
            isFromFacebook,
          )}
          {renderSocialSignin(index.apple, 'Sign up with Apple', isFromApple)}
          {renderExistingUserLink()}
        </View>
      </KeyboardAwareScrollView>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.registerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>TESTAPP</Text>
        </View>
        {renderSignInContainer()}
      </View>
    </SafeAreaView>
  );
}
