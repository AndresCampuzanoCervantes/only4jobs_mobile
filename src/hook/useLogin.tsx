import { useState } from 'react';
import axios from '../utils/instance';
import { useToast } from 'native-base';
const useLogin = () => {
    const [, setIsSession] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    //const { setSession } = useContext(UserContext)
    const toast = useToast();

    const signIn = async () => {
        try {
            if (values.email.trim().length > 0) {
                return;
            } else if (values.password.trim().length > 0) {
                return;
            } else {

                const data = await axios.post('/login', {
                    email: values.email,
                    password: values.password,
                });

                if (data.status === 200) {
                    axios.interceptors.request.use(function (config: any) {
                        const setting = config;
                        setting.headers.Authorization = data.data.token
                            ? data.data.token
                            : '';
                        return config;
                    });
                    /*const sesion = {
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
                    setSession(sesion);*/
                    setIsSession(true);
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
