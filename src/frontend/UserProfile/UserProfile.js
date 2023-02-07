import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import index from '../assets/icons';

export default function UserProfile(props) {
  const {navigation, route} = props;
  console.log(props.route.params, 'user params');
  const userName = route?.params?.userName;
  const referalCode = route?.params?.referallCode
    ? route?.params?.referallCode
    : 'ZaIbEq';
  const userDisplayName = userName ? userName : 'Gautam';
  const [qrValue, setQrValue] = useState(userDisplayName);
  const [displayUserName, setDiaplayUserName] = useState(userDisplayName);

  return (
    <View style={styles.userProfileScreen}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image source={index.back} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.yellowContainer}>
        <Image source={index.profile1} style={styles.profile} />
        <Text style={styles.userCodeText}>{displayUserName}</Text>
        <View style={styles.qrcodeView}>
          <View style={styles.padding}>
            <QRCode
              value={qrValue}
              size={150}
              backgroundColor="white"
              color="black"
            />
          </View>
        </View>
        <Text style={styles.userCodeText}>User Code</Text>
        <TouchableOpacity style={styles.referralArea}>
          <Text style={styles.referralCodeText}>{referalCode}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
