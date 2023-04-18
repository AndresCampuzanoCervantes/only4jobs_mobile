/* eslint-disable react-native/no-inline-styles */
import { Input, Text } from 'native-base';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { colors, styles, stylesLogin } from '../../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useRecoverPassword from '../../hook/useRecoverPassword';

interface Props extends StackScreenProps<any, any> {}
const RecoverPassword = ({navigation}: Props) => {
    const {handelSeed,setValues,values} = useRecoverPassword({navigation} as any);

    return (
        <ScrollView contentContainerStyle={[stylesLogin.container, styles.globalMargin]}>
            <View style={stylesLogin.contect}>
                <View style={stylesLogin.contectLogo}>
                    <Image
                        source={require('../../resource/image/ONLY4Jobs-WEB.png')}
                        style={stylesLogin.logo}
                    />
                </View>
                <View>
                    <Text color={colors.while} fontWeight={500} fontSize={15} textAlign="justify" style={{ marginVertical: 20 }}>
                        Para recuperar tu cuenta ingresa tu correo electrónico y
                        posteriormente se le enviará un mensaje. Si no encuentra el mensaje
                        tal vez esté en la bandeja de correos no deseados.
                    </Text>
                    <Input
                        type="text"
                        color="black"
                        backgroundColor="blue.200"
                        marginY={2.5}
                        keyboardType="email-address"
                        placeholder="Email"
                        onChangeText={value => setValues({ ...values, email: value })}
                        value={values.email}
                    />
                </View>
                <View >
                    <TouchableOpacity
                        style={stylesLogin.button}
                        onPress={handelSeed}>
                        <Text fontWeight={700} style={stylesLogin.textbutton}>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default RecoverPassword;
