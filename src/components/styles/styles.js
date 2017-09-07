import { StyleSheet } from 'react-native'

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
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  impactTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 20
  },
  impactText: {
    fontSize: 80,
    fontWeight: '700'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
