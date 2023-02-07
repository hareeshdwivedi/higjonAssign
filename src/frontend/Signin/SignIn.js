import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import index from '../assets/icons';
import FormInput from '../FormInput/FormInput';
import IconButton from '../FormInput/IconButton';
import TextButton from '../FormInput/TextButton';
import {useSelector} from 'react-redux';

const SignIn = props => {
  const {navigation, route} = props;
  // console.log(props,'props in sigin')
  // const userData = route?.params?.userData;
  // console.log(userData,'user')
  const [errorMesg, setErrormsg] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [isUserButtonClicked, setIsUserButtonClicked] = useState(true);
  const [isOwnerButtonClicked, setIsOwnerButtonClicked] = useState(false);
  const checkIfAnyFieldNotEntered = userId !== '' && password !== '';
  const userReducer = useSelector(state => state.userReducer);
  const {users = []} = userReducer;
  console.log(
    isOwnerButtonClicked,
    isUserButtonClicked,
    'isOwnerButtonClicked',
    'isUserButtonClicked',
  );
  console.log(users, 'users in signin');
  const fdata = {
    email: 'girishkumarreddy@gmail.com',
    password: 'gautam1234565',
  };
  const renderUserButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.userButton,
          !isUserButtonClicked && styles.userbtnBackgroundColor,
        ]}
        onPress={() => {
          setIsOwnerButtonClicked(false);
          setIsUserButtonClicked(true);
          setUserId('');
          setPassword('');
          setShowErrorMessage('');
        }}>
        <Text
          style={[
            styles.userText,
            isUserButtonClicked && styles.userTextSelected,
          ]}>
          USER
        </Text>
      </TouchableOpacity>
    );
  };
  const renderOwnerButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.ownerButton,
          isOwnerButtonClicked && styles.ownerButtonSelectedColor,
        ]}
        onPress={() => {
          setIsUserButtonClicked(false);
          setIsOwnerButtonClicked(true);
          setUserId('');
          setPassword('');
          setShowErrorMessage('');
        }}>
        <Text
          style={[
            styles.ownerText,
            isOwnerButtonClicked && styles.ownerTextSelected,
          ]}>
          OWNER
        </Text>
      </TouchableOpacity>
    );
  };

  const checkValidUser = () => {
    const isUserExist = users?.find(user => userId === user?.userId);
    console.log(isUserExist, 'isuserexist');
    if (isUserExist) {
      if (
        isUserButtonClicked &&
        !isUserExist?.isOwner &&
        password === isUserExist?.password
      ) {
        setShowErrorMessage('');
        navigation.navigate('Location', {
          userName: isUserExist?.name,
          referalCode: isUserExist?.referallCode,
        });
        setUserId('');
        setPassword('');
      }
      if (
        isOwnerButtonClicked &&
        isUserExist?.isOwner &&
        password === isUserExist?.password
      ) {
        setShowErrorMessage('');
        navigation.navigate('OwnerProfile', {
          userName: isUserExist?.name,
        });
        setUserId('');
        setPassword('');
      } else if (
        password !== isUserExist?.password ||
        (isOwnerButtonClicked && !isUserExist?.isOwner) ||
        (isUserButtonClicked && isUserExist?.isOwner)
      ) {
        setShowErrorMessage('Invalid Credentials');
      }
    } else {
      setShowErrorMessage('User Does not exist');
    }
  };
  const renderSignInContainer = () => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={-300}
        contentContainerStyle={styles.keyboardView}>
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            {renderUserButton()}
            {renderOwnerButton()}
          </View>
          <FormInput
            containerStyle={styles.emailContainer}
            placeholder="User Id"
            value={userId}
            onChange={text => setUserId(text)}
            image={index.user}
            displayName="UserID"
            imageStyle={styles.marginTop20}
          />
          <FormInput
            containerStyle={styles.passwordContainer}
            placeholder="password"
            value={password}
            secureTextEntry={false}
            onChange={text => setPassword(text)}
            // appendComponent={
            //   <IconButton
            //     // icon={showPassword ? index.eye_off : index.eye}
            //     iconStyle={{
            //       tintColor: '#999999',
            //     }}
            //     onPress={() => setShowPassword(!showPassword)}
            //   />
            // }
            image={index.lock}
            displayName="Password"
            imageStyle={styles.marginTop}
          />

          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorText}>{showErrorMessage}</Text>
          </View>
          <View style={styles.registerButtonContainer}>
            <TextButton
              contentContainerStyle={styles.registerButton}
              label="LOGIN"
              labelStyle={styles.registerLabel}
              onPress={() => {
                if (!checkIfAnyFieldNotEntered) {
                  setShowErrorMessage('Please Enter All Details');
                } else {
                  checkValidUser(userId, password);
                  fetch('https://192.168.0.104:3000/signin', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fdata),
                  })
                    .then(res => res.json())
                    .then(data => {
                      // console.log(data);
                      if (data.error) {
                        setErrormsg(data.error);
                      } else {
                        alert('logged successfully');
                        navigation.navigate('homepage');
                      }
                    });
                  navigation.navigate('Location');
                }
              }}
            />
          </View>
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
};

export default SignIn;
