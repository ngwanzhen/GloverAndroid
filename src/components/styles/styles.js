import { StyleSheet } from 'react-native'
// import { Constants } from 'expo'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ed3cf',
    // paddingTop: Constants.statusBarHeight
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 80,
    height: 80
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20
  },
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#e1e8f0',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700'
  },
  otherText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'italic',
    marginVertical: 10
  },
  sideNavContainer: {
    flex: 1,
    paddingLeft: 20,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e1e8f0'
  },
  sideNavText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: '700'
  },
  contentContainer: {
    paddingVertical: 20
  },
  startSessionContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  endSessionContainer: {
    flex: 1,
    backgroundColor: '#66CCCC',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
