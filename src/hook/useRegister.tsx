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
            if (!values.email.trim()) {
                const idToast = 'errorCreateToast';
                if (!toast.isActive(idToast)) {
                    toast.show({
                        id: idToast,
                        title: 'Error',
                        description: 'Ingrese el Email',
                        placement: 'top',
                        backgroundColor: 'blue.300',
                    });
                }
                navigation.replace('login');
                return;
            }
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
                    });
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
