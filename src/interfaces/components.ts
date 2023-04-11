import { TouchableOpacityProps, ViewProps } from "react-native"
export interface inputprops {
    data: string
}

export interface ICheckBoxProps extends TouchableOpacityProps {
    value: boolean
    toggleValue: () => void
    orientation?: "left" | "right"
    containerStyle?: ViewProps["style"]
    title?: string
    variant?: "primary" | "secondary" | "white" | "transparent" | "noShow"
    disabled?: boolean
}
