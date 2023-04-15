/* eslint-disable no-useless-escape */
import { useState } from 'react';
import axios from '../utils/instance';
import { useToast } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }
const useRegister = ({ navigation }: Props) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
        name: '',
        lastName: '',
        tag: '',
    });
    const toast = useToast();

    const register = async () => {
        try {
            if (!values.name.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Ingrese los nombres',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.lastName.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Ingrese los apellidos',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.tag.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Ingrese el tag',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.email.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Ingrese el email',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.password.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Ingrese la contraseña',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!values.passwordConfirmation.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Confirme la contraseña',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (values.passwordConfirmation !== values.password) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Los campos de contraseña no coinciden',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (values.passwordConfirmation !== values.password) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Los campos de contraseña no coinciden',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.password)) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Advertencia',
                        description: 'Debe contener 8 caracteres, uno en mayúscula, uno en minúscula, un número y un carácter de caso especial',
                        placement: 'top',
                        backgroundColor: 'yellow.500',
                    });
                }
                return;
            } else {
                const data = await axios.post('/register', {
                    tag: values.tag,
                    name: values.name,
                    lastname: values.lastName,
                    email: values.email,
                    password: values.password,
                });

                if (data.status === 201) {
                    const idToast = 'createToast';
                    if (!toast.isActive(idToast)) {
                        toast.show({
                            id: idToast,
                            title: 'Registrado',
                            description: data.data.message,
                            placement: 'top',
                            backgroundColor: 'blue.500',
                        });
                    }
                    navigation.replace('login');
                } else {
                    console.log(data.data.response);
                    const idToast = 'errorCreateToast';
                    if (!toast.isActive(idToast)) {
                        toast.show({
                            id: idToast,
                            title: 'Error',
                            description: data.data.message,
                            placement: 'top',
                            backgroundColor: 'red.500',
                        });
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return ({
        setValues,
        values,
        register,
    });
};

export default useRegister;
