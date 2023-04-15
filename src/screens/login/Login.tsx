/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { colors, styles, stylesLogin } from '../../theme/appTheme';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Icon, Input, Link, Text } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import useLogin from '../../hook/useLogin';


interface Props extends StackScreenProps<any, any> { }
const Login = ({ navigation }: Props) => {
    const { values, setValues, signIn } = useLogin({ navigation } as any);
    const [show, setShow] = useState(false);

    return (
        <ScrollView contentContainerStyle={[stylesLogin.container, styles.globalMargin]}>
            <View style={stylesLogin.contect}>
                <View style={stylesLogin.contectLogo}>
                    <Image source={require('../../resource/image/ONLY4Jobs-WEB.png')} style={stylesLogin.logo} />
                </View>
                <View>
                    <Input
                        type="text"
                        color="black"
                        backgroundColor="blue.200"
                        marginY={5}
                        keyboardType="email-address"
                        InputLeftElement={
                            <Icon as={<Icons name="person" />} size={5} mr="2" color="white" />
                        } placeholder="Email"
                        onChangeText={(value) => setValues({ ...values, email: value })}
                        value={values.email} />
                    <Input
                        type={show ? 'text' : 'password'}
                        color="black"
                        backgroundColor="blue.200"
                        marginTop={5}
                        keyboardType="default"
                        onChangeText={(value) => setValues({ ...values, password: value })}
                        value={values.password}
                        InputRightElement={
                            <TouchableOpacity onPress={() => setShow(!show)}>
                                <Icon as={<Icons name={show ? 'visibility' : 'visibility-off'} />} size={5} mr="2" color="white" />
                            </TouchableOpacity>} placeholder="Contraseña" />
                </View>
                <View style={stylesLogin.labelRecoverPass}>
                    <Text
                        fontSize="sm"
                        color={colors.while}
                    >
                        Soy un nuevo usuario. {' '}
                    </Text>
                    <Link
                        _text={{
                            color: colors.while,
                            fontWeight: 'medium',
                            fontSize: 'sm',
                        }}
                        onPress={() => navigation.navigate('registro')}
                    >
                        Registrarse
                    </Link>
                </View>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity
                        style={stylesLogin.button}
                        onPress={signIn}>
                        <Text fontWeight={700} style={stylesLogin.textbutton}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }} >
                    <Link
                        _text={stylesLogin.txtTransparent}
                        onPress={() => navigation.navigate('recuperar-contraseña')}
                    >
                        Olvide mi contraseña
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;
