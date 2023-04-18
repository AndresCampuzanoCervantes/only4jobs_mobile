import {StackScreenProps} from '@react-navigation/stack';
import {Icon, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import useRegister from '../../hook/useRegister';
import {styles, stylesLogin} from '../../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}
const Register = ({navigation}: Props) => {
  const {values, setValues, register} = useRegister({navigation} as any);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={[stylesLogin.container, styles.globalMargin]}>
      <View style={stylesLogin.contect}>
        <View style={stylesLogin.contectLogo}>
          <Image
            source={require('../../resource/image/ONLY4Jobs-WEB.png')}
            style={stylesLogin.logo}
          />
        </View>
        <View>
          <Input
            type="text"
            color="black"
            backgroundColor="blue.200"
            marginY={3}
            keyboardType="default"
            placeholder="Nombres"
            onChangeText={value => setValues({...values, name: value})}
            value={values.name}
          />
          <Input
            type="text"
            color="black"
            backgroundColor="blue.200"
            marginY={3}
            keyboardType="default"
            placeholder="Apellidos"
            onChangeText={value => setValues({...values, lastName: value})}
            value={values.lastName}
          />
          <Input
            type="text"
            color="black"
            backgroundColor="blue.200"
            marginY={3}
            keyboardType="default"
            placeholder="Tag"
            onChangeText={value => setValues({...values, tag: value})}
            value={values.tag}
          />
          <Input
            type="text"
            color="black"
            backgroundColor="blue.200"
            marginY={3}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={value => setValues({...values, email: value})}
            value={values.email}
          />
          <Input
            type={show ? 'text' : 'password'}
            color="black"
            backgroundColor="blue.200"
            marginY={3}
            keyboardType="default"
            onChangeText={value => setValues({...values, password: value})}
            value={values.password}
            InputRightElement={
              <TouchableOpacity onPress={() => setShow(!show)}>
                <Icon
                  as={<Icons name={show ? 'visibility' : 'visibility-off'} />}
                  size={5}
                  mr="2"
                  color="white"
                />
              </TouchableOpacity>
            }
            placeholder="Contraseña"
          />
          <Input
            type={show ? 'text' : 'password'}
            color="black"
            backgroundColor="blue.200"
            marginTop={5}
            keyboardType="default"
            onChangeText={value =>
              setValues({...values, passwordConfirmation: value})
            }
            value={values.passwordConfirmation}
            InputRightElement={
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <Icon
                  as={
                    <Icons
                      name={showConfirm ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="white"
                />
              </TouchableOpacity>
            }
            placeholder="Confirmar Contraseña"
          />
        </View>
        <View>
          <TouchableOpacity style={stylesLogin.button} onPress={register}>
            <Text fontWeight={700} style={stylesLogin.textbutton}>
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
