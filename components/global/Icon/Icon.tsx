import { View, TouchableOpacity, Text } from "react-native";
import Iconicon from "react-native-vector-icons/Ionicons"
import { IconProps } from "../../../types/Props-Types";
import styles from "./Icon.css";
import { useState } from "react"

export default function Icon({ name, size=50, color="white", notifications, pressHandle } : IconProps){
    const [focused, setFocused] = useState<boolean>(false)
    const mouseOn = ()=> setFocused(true)
    const mouseOut = ()=> setFocused(false)
    return ( 
        <View style={styles.container}>
            {notifications && <View style={styles.circle}><Text style={styles.circleText}>{notifications}</Text></View>}
            <TouchableOpacity
                onPressIn={mouseOn}
                onPressOut={mouseOut}
                onPress={pressHandle}
                style={{
                    width : focused ? size/1.1 : size,
                    height : focused ? size/1.1 : size,
                    justifyContent : "center",
                    alignItems : "center",
                }}
            >
                <Iconicon name={name} color={color} size={focused ? size/1.1 : size}/>
            </TouchableOpacity>
        </View>
    )
}