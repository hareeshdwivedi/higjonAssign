import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  back: {
    width: 40,
    height: 40,
  },
  userProfileScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  yellowContainer: {
    backgroundColor: 'gold',
    width: '90%',
    // height: '1000%',
    // flex: 1,
    borderRadius: 15,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: -60,
  },
  referralArea: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 40,
    marginBottom: 20,
  },
  referralCodeText: {
    color: '#7F00FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userCodeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  qrcodeView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    // width: '50%',
  },
  padding: {
    padding: 15,
  },
  backButton: {
    paddingHorizontal: 10,
  },
});

export default styles;
