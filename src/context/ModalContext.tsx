import { createContext } from "react"

const initialState = {
    onClose: () => {},
    data: {} as any,
    setData: (data: any) => {},
}

export const ModalContext = createContext(initialState)

export interface IModalProviderProps<T> {
    children: JSX.Element
    onClose: () => void
    data: T
    setData: (data: T) => void
}

const ModalProvider = <T,>({
    children,
    onClose,
    setData,
    data,
}: IModalProviderProps<T>) => {
    return (
        <ModalContext.Provider value={{ onClose, data, setData }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
