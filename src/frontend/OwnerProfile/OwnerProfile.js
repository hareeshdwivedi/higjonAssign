import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import index from '../assets/icons';

const OwnerProfile = props => {
  const {navigation, route} = props;
  const userName = route?.params?.userName;
  const userDisplayName = userName ? userName : 'Gautam';
  return (
    <View style={styles.userProfileScreen}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image source={index.back} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.yellowContainer}>
        <Image source={index.profile1} style={styles.profile} />
        <Text style={styles.userCodeText}>{userDisplayName}</Text>
        <Text style={styles.openCamera}>Open Camera to scan QR</Text>
        <TouchableOpacity style={styles.qrcodeView}>
          <Image source={index.camera} style={styles.camera} />
        </TouchableOpacity>
        <Text style={styles.userCodeText}>User Code</Text>
        <TouchableOpacity style={styles.referralArea}>
          <View style={styles.referralCodeText}>
            <Text>Type Code here</Text>
          </View>
          <View style={styles.greenBox}>
            <Image source={index.tick} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OwnerProfile;
