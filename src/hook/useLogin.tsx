import { useState } from 'react';
import axios from '../utils/instance';
const useLogin = () => {
    const [show, setShow] = useState(false);
    const [, setIsSession] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    //const { setSession } = useContext(UserContext)
    //const [error, setError] = useState();

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

                /* const sesion = {
                    token: data.data.token,
                    user: {
                        id: data?.data?.user?.id,
                        tag: data?.data?.tag,
                        name: data?.data?.name,
                        lastname: data?.data?.lastname,
                        email: data?.data?.email,
                        profileId: data?.data?.profileId,
                    },
                } */

                if (data.status === 200) {
                    axios.interceptors.request.use(function (config: any) {
                        const setting = config;
                        setting.headers.Authorization = data.data.token
                            ? data.data.token
                            : '';
                        return config;
                    });
                    //setSession(sesion);
                    setIsSession(true);
                } else {
                    //setError(data.data.message);
                    //setAlertVisible(true)
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    return ({
        show,
        setShow,
        setValues,
        values,
        signIn,
    });
};

export default useLogin;
