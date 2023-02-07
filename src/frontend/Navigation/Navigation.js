import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '../Register/RegisterScreen';
import SignIn from '../Signin/SignIn';
import Location from '../Location/Location';
import UserProfile from '../UserProfile/UserProfile';
import OwnerProfile from '../OwnerProfile/OwnerProfile';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Register'}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="OwnerProfile" component={OwnerProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
