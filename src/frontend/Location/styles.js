import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  locationContainer: {
    // width: '100%',
    // backgroundColor: '#fff',
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // width: '90%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: '5%',
    backgroundColor: '#7F00FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 22,
  },
  locationArea: {
    // width: '90%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#7F00FF',
  },
  map: {
    width: width * 0.8,
    height: height * 0.7,
    // borderRadius: 10,
    // borderWidth: 1,
    // overflow: 'hidden',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingTop: 15,
  },
  back: {
    width: 40,
    height: 40,
  },
  confirmLocationbtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  keyboardView: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    height: '100%',
    // marginTop: 50,
  },
  confirmLocationText: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#000000',
  },
  picker: {
    flex: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginTop: -50,
  },
  pickerContainer: {
    flex: 1,
    // paddingTop: 40,
    alignItems: 'center',
  },
  dropdown1BtnStyle: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 10,
  },
  dropdown1BtnTxtStyle: {
    color: 'black',
    // textAlign: 'left'
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#C5C5C5',
    opacity: 0.7,
  },
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default styles;
