import { IconButton } from "react-native-paper";
import { navigationProps } from "../../../types/Props-Types";

export default function BackButton({ navigation } : navigationProps){
    const pressHandle = ()=> navigation?.goBack && navigation?.goBack()
    return (
        <IconButton
            icon="arrow-left"
            iconColor="white"
            size={25}
            onPress={pressHandle}
        />
    )
}