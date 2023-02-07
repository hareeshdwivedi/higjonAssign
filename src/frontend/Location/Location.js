import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MapView, {Marker} from 'react-native-maps';
import SelectDropdown from 'react-native-select-dropdown';
import index from '../assets/icons';
import styles from './styles';
import {generateUniqueReferral} from '../Redux/Actions/userActions';

const Location = props => {
  const {navigation, route} = props;
  console.log(props.route.params, 'params');
  const userName = route?.params?.userName;
  const referallCode = route?.params?.referalCode
    ? route?.params?.referalCode
    : generateUniqueReferral(userName);
  console.log(userName, 'userName', referallCode, 'referallCode');
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    'Bengaluru',
    'Chennai',
    'Hyderabad',
    'Kochi',
    'Mumbai',
    'Pune',
    'Delhi',
    'Kolkata',
  ];
  const [pin, setPin] = useState({
    latitude: 12.9716,
    longitude: 77.5946,
  });
  const [region, setRegion] = useState({
    latitude: 12.9716,
    longitude: 77.5946,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  console.log(region, 'current region');
  const getLatLongForCity = city => {
    console.log(selectedCity, 'selectedcity');
    if (city === 'Bengaluru') {
      return {
        latitude: 12.9716,
        longitude: 77.5946,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Chennai') {
      return {
        latitude: 13.0827,
        longitude: 80.2707,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Hyderabad') {
      return {
        latitude: 17.385,
        longitude: 78.4867,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Kochi') {
      return {
        latitude: 9.9312,
        longitude: 76.2673,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Delhi') {
      return {
        latitude: 28.6139,
        longitude: 77.209,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Pune') {
      return {
        latitude: 18.5204,
        longitude: 73.8567,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Kolkata') {
      return {
        latitude: 22.5726,
        longitude: 88.3639,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    if (city === 'Mumbai') {
      return {
        latitude: 18.922,
        longitude: 72.8347,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
    }
  };
  // getLatLongForCity();
  console.log(region, 'refion');
  var headers = new Headers();
  headers.append('X-CSCAPI-KEY', 'API_KEY');

  return (
    <View style={styles.locationContainer}>
      <View style={styles.locationTopView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={index.back} style={styles.back} />
        </TouchableOpacity>

        <Image source={index.profile1} style={styles.profile} />
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        // keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={-300}
        contentContainerStyle={styles.keyboardView}>
        <View style={styles.container}>
          <SelectDropdown
            data={cities}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setSelectedCity(selectedItem);
              setRegion(getLatLongForCity(selectedItem));
              // console.log(getLatLongForCity(selectedItem),'lat long')
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              console.log(selectedItem, 'button select');
              // setRegion(getLatLongForCity(selectedItem));
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              console.log(item, 'item');
              return item;
            }}
            defaultButtonText={'Select Location'}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          {/* <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(details, 'details');
              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.log,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
            }}
            onFail={error => console.log(error)}
            onNotFound={() => console.log('no results')}
            query={{
              key: 'AIzaSyCdMbC5Z272RF0Kq3PA48j-HSHBWebm_hQ',
              language: 'en',
              components: 'country:in',
              types: 'establishment',
              radius: 30000,
              location: `${region.latitude}, ${region.longitude}`,
            }}
            styles={{
              container: {flex: 0, width: '90%', marginTop: 30},
              listView: {backgroundColor: 'white'},
            }}
            listEmptyComponent={() => (
              <View style={{flex: 1}}>
                <Text>No results were found</Text>
              </View>
            )}
          /> */}

          <View style={{borderRadius: 10, overflow: 'hidden'}}>
            <MapView
              style={styles.map}
              // initialRegion={region}
              // onRegionChange={getLatLongForCity(selectedCity)}
              region={region}
              onRegionChangeComplete={reg => setRegion(reg)}
              onPress={e =>
                setRegion({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                })
              }
              provider="google">
              <Marker
                coordinate={region}
                draggable={true}
                onDragStart={e => {
                  console.log('event', e.nativeEvent.coordinate);
                }}
                onDragEnd={e => {
                  setRegion({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  });
                }}
              />
            </MapView>
          </View>
          <TouchableOpacity
            style={styles.confirmLocationbtn}
            onPress={() =>
              navigation.navigate('UserProfile', {
                userName: userName,
                referallCode: referallCode,
              })
            }>
            <Text style={styles.confirmLocationText}>
              Confirm your Location
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Location;
