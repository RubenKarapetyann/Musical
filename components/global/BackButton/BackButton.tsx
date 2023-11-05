import { IconButton } from "react-native-paper";
import { backButtonProps } from "../../../types/Props-Types";

export default function BackButton({ navigation, icon="arrow-left" } : backButtonProps){
    const pressHandle = ()=> navigation?.goBack && navigation?.goBack()
    return (
        <IconButton
            icon={icon}
            iconColor="white"
            size={25}
            onPress={pressHandle}
        />
    )
}