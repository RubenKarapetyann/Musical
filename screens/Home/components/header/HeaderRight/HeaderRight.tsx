import { Text, View } from "react-native";
import Icon from "../../../../../components/global/Icon/Icon";
import styles from "./HeaderRight.css";

export default function HeaderRight(){
    return (
        <View style={styles.container}>
            <Icon name="notifications" size={25}/>
            <Icon name="time" size={25}/>
            <Icon name="settings-sharp" size={25}/>
        </View>
    )
}