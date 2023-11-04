import { View, Text, ScrollView } from "react-native"
import { HomeCollectorProps } from "../../../types/Props-Types"
import MassiveCard from "../../cards/MassiveCard/MassiveCard"
import styles from "./HomeCollector.css"

export default function HomeCollector({ list, title, handle, type } : HomeCollectorProps){
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                display : "flex",
                flexDirection : "row",
            }}>
                {list.map(item=>{
                    return <MassiveCard
                        type={type}
                        handle={handle}
                        name={item.name}
                        image={item.images[0].url}
                        key={item.id}
                        id={item.id}
                    />
                })}
            </ScrollView>
        </View>
    )
}