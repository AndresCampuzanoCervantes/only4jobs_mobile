import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"

const USUARIO_KEY = "@usuario:key"

export function useUsuarioAsyncStorage() {
    let usuario = null
    const onLoad = async () => {
        const user = await getUsuario()
        usuario = user
    }

    useEffect(() => {
        onLoad()
    }, [])
    async function saveUsuario(usuario) {
        try {
            await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario))
            usuario = getUsuario()
            return JSON.stringify(usuario)
        } catch (error) {
            //Error
            console.log("error al guardar: " + error.message)
            return "Error de sintaxis"
        }
    }

    async function getUsuario() {
        try {
            const item = await AsyncStorage.getItem(USUARIO_KEY)
            usuario = item
            return JSON.parse(item)
        } catch (error) {
            // Error retrieving data
            console.log("Error al recuperar:" + error.message)
            return null
        }
    }

    async function deleteUsuario() {
        try {
            await AsyncStorage.removeItem(USUARIO_KEY)
            const item = await AsyncStorage.getItem(USUARIO_KEY)
            return item == null ? "usuario removido" : "usuario no removido"
        } catch (error) {
            console.log("Error al eliminar" + error.message)
            return "Error de sintaxis"
        }
    }
    return { saveUsuario, getUsuario, deleteUsuario, usuario }
}
