import { useContext, useState } from 'react';
import axios from '../utils/instance';
import { useToast } from 'native-base';
import { UserContext } from '../context/Usuario';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }
const useLogin = ({ navigation }: Props) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const { setSession } = useContext(UserContext);
    const toast = useToast();

    const signIn = async () => {
        try {
            if (!values.email.trim()) {
                const idToast = 'errorLoginToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Debe ingresar el email.',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.password.trim()) {
                const idToast = 'errorLoginToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Debe ingresar la contraseña',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else {
                axios.post('/login', {
                    email: values.email,
                    password: values.password,
                }).then((data) => {
                    if (data?.status === 200) {
                        const sesion = {
                            token: data.data.token,
                            user: {
                                id: data?.data?.user?.id,
                                tag: data?.data?.tag,
                                name: data?.data?.name,
                                lastname: data?.data?.lastname,
                                email: data?.data?.email,
                                profileId: data?.data?.profileId,
                            },
                        };
                        setSession(sesion);
                        navigation.replace('home');
                    } else {
                        console.log(data.data.response);
                        const idToast = 'errorLoginToast';
                        if (!toast.isActive(idToast)) {
                            toast.show({
                                id: idToast,
                                title: 'Error',
                                description: data.data.message,
                            });
                        }
                    }
                }).catch(console.log);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return ({
        setValues,
        values,
        signIn,
    });
};

export default useLogin;
