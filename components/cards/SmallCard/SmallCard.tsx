import { View, Image, Text, TouchableOpacity } from "react-native"
import { SmallCardProps } from "../../../types/Props-Types"
import styles from "./SmallCard.css"

export default function SmallCard({ name, artists, image } : SmallCardProps){
    return (
        <TouchableOpacity style={styles.container}>
            <>
                <View>
                    <Image
                        source={{
                            uri : image
                        }}
                        width={50}
                        height={50}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name.length >= 35 ? `${name.slice(0,32)}...` : name}</Text>
                    <Text style={styles.artist}>{artists.map(artist=>artist.name).join(",")}</Text>
                </View>
            </>
        </TouchableOpacity>
    )
}
