import { StyleSheet, Dimensions } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ed3cf',
    paddingTop: 20
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120
  },
  title: {
    fontSize: 30,
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
    paddingTop: 20,
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
  },
  bangText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'red'
  },
  impactContainer: {
    flex: 1,
    backgroundColor: '#e62739',
    alignItems: 'center',
    justifyContent: 'center'
  },
  impactTimer: {
    width: 180,
    height: 180,
    borderRadius: 180/2,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  impactTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 50
  },
  impactText: {
    fontSize: 80,
    fontWeight: '700'
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#131111',
    alignItems: 'center'
  },
  mapContainer: {
    flex: 1,
    height: 300,
    width: 400
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  ambulanceLogo: {
    width: 300,
    height: 250
  },
  titleBar: {
    backgroundColor: '#9A031E',
    paddingLeft: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    textAlign: 'left',
    textAlignVertical: 'center',
    height: 23,
    width: Dimensions.get('window').width
  }
})
