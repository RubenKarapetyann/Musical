import { View, Text, Image } from "react-native"
import styles from "./MassiveCard.css"
import { MassiveCardProps } from "../../../types/Props-Types"
import { useState } from "react"
import { TouchableOpacity } from "react-native"

export default function MassiveCard ({ name, image, subTitle, handle, id } : MassiveCardProps){
    const [focused, setFocused] = useState<boolean>(false)

    const mouseOn = ()=> setFocused(true)
    const mouseOut = ()=> setFocused(false)

    const pressHandle = ()=> handle(id)

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPressIn={mouseOn}
                onPressOut={mouseOut}
                onPress={pressHandle}
            >
                <View>
                    <Image 
                        source={{
                            uri : image
                        }}
                        alt="preview"
                        width={focused ? 140 : 145}
                        height={focused ? 140 : 145}
                    />
                </View>
                <Text style={styles.title}>
                    {name.length >= 19 ? `${name.slice(0,16)}...` : name}
                </Text>
                {subTitle && <Text style={styles.subTitle}>
                    {subTitle.length >= 21 ? `${subTitle.slice(0,18)}...` : subTitle}
                </Text>}
            </TouchableOpacity>
        </View>
    )
}