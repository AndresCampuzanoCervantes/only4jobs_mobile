import axios from "axios"
import Config from "react-native-config"

const BASE_URL = Config.API_ONLY4JOBS

axios.defaults.baseURL = BASE_URL

axios.defaults.validateStatus = () => true

//SPACE TO JWT DEFAULT CONFIGURATION

axios.interceptors.response.use(async res => {
    if (res.status >= 500) {
        console.error(res.data)
    }

    return res
})
/* axios.interceptors.request.use(function (config: any) {
	const token = store.getState()?.auth.user?.token || ""
	const setting = config
	setting.headers.Authorization = token ? `Token ${token}` : ""
	return config
}) */
