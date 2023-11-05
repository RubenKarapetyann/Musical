import { ScrollView } from "react-native";
import { PlaylistCollectorProps } from "../../../types/Props-Types";
import SmallCard from "../../cards/SmallCard/SmallCard";

export default function PlaylistCollector({ list, handle } : PlaylistCollectorProps){
    return (
        <ScrollView style={{marginBottom : 100}}>
            {list.map(card=>{
                return <SmallCard
                    name={card.name}
                    artists={card.artists}
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    handle={handle}
                />
            })}
        </ScrollView>
    )
}