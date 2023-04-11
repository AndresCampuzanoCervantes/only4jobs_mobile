import { useNavigate } from "../Hooks/useNavigate"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import color from "../styles/colors"

export default function ToolBar(props) {
    const navigate = useNavigate()

    return (
        <View
            style={[
                props.style,
                { height: 64, marginTop: 44, backgroundColor: color.PURPLE },
            ]}>
            {props.titulo && (
                <Text
                    style={{
                        fontFamily: "Poppins-Medium",
                        marginTop: 12,
                        textAlign: "center",
                        fontSize: 25,
                        color: color.WHITE,
                    }}>
                    {props.titulo}
                </Text>
            )}
            {props.iconLeft && (
                <TouchableOpacity
                    style={{ position: "absolute", left: 20, top: 15 }}
                    onPress={() => navigate({ screen: "Login" })}>
                    <Image
                        style={{
                            tintColor: color.WHITE,
                            width: 30,
                            height: 30,
                        }}
                        source={props.iconLeft}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}
