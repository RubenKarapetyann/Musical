import { Text, View, ScrollView } from "react-native"
import styles from "./Main.css"

export default function Main(){
    return (
        <ScrollView style={styles.container}>
            <Text>main</Text>
        </ScrollView>
    )
}