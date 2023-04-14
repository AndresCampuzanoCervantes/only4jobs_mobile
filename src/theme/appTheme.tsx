import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#249AE3',
    secondary: '#2DA3DA',
    tertiary: '#B5E2FC',
    cuarto: '##244ae3',
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
        display: 'flex',
        position: 'absolute',
        right: 0,
        top: 350,
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
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    botonGrandeTexto: {
        color: 'white',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 10,
    },
    avatarContainer: {
        alignItems: 'center',
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        // alignItems: 'center',
    },
    menuBoton: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    menuText: {
        fontSize: 20,
    },
});
