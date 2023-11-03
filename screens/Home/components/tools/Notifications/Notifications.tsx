import { ScrollView, Text } from "react-native";
import styles from "./Notifications.css";
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from "../../../../../constants/COLORS";
import { Animated } from "react-native";
import { useEffect, useRef } from "react"

export default function Notifications(){
    const animatedValue = useRef(new Animated.Value(0))

    const animation = ()=>{
        Animated.loop(
            Animated.timing(animatedValue.current,{
                toValue : 1,
                duration : 2000,
                useNativeDriver : false,
            })
        ).start()
    }

    useEffect(()=>{
        animation()
    },[])

    const animatedOpacity = animatedValue.current.interpolate({
        inputRange : [0, 1],
        outputRange : [1, 0]
    })


    return (
        <ScrollView style={styles.container}>
            <Animated.View style={{
                opacity : animatedOpacity,
            }}>
                <Ionicons 
                    name="notifications" 
                    size={150} 
                    color={colors.lightGray} 
                    style={styles.icon}
                />
            </Animated.View> 
            <Text style={styles.title}>There are not notifications yet</Text>
        </ScrollView>
    )
}