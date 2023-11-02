import { View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./HeaderLeft.css"

export default function HeaderLeft(){
    return ( 
        <View style={styles.container}>
            <Ionicons name="musical-note" color="white" size={50}/>
        </View>
    )
}