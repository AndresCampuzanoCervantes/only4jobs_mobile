import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#249AE3',
  secondary: '#2DA3DA',
  tertiary: '#B5E2FC',
  cuarsto: '#24afff',
  while: 'white',
};

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  contect: {
    height: '100%',
    width: '100%',
  },
  contectLogo: {
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 220,
  },
  inputStyle: {
    marginVertical: 10,
  },
  labelRecoverPass: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 10,
    height: 30,
    backgroundColor: '#bfdbfe',
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textbutton: {
    fontSize: 20,
    color: '#828587',
  },
  txtTransparent: {
    textAlign: 'center',
    color: colors.while,
    fontSize: 14,
  },
});

export const styles = StyleSheet.create({
  globalMargin: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    // alignItems: 'center',
  },
});
