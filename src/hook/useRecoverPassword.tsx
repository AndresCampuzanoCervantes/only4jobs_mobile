import { StackScreenProps } from '@react-navigation/stack';
import { useToast } from 'native-base';
import { useState } from 'react';

interface Props extends StackScreenProps<any, any> { }
const useRecoverPassword = ({ navigation }: Props) => {
    const [values, setValues] = useState({
        email: '',
    });
    const toast = useToast();

    const handelSeed = () => {
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
        } else {
            navigation.replace('login');
        }
    };

    return ({
        values,
        setValues,
        handelSeed,
    });
};

export default useRecoverPassword;
