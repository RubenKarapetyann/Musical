import { View, Text } from "react-native"
import { useState, useEffect } from "react"
import WebApiCalls from "../../utils/api/WebApiCalls"
import endpoints from "../../endpoints/endpoints"
import { GET } from "../../constants/API"
import { navigationProps } from "../../types/Props-Types"
import MainImage from "../../components/global/Image/Image"
import { ScrollView } from "react-native"
import { apiPlaylistType } from "../../types/Global-Types"

export default function Playlist({ route } : navigationProps){
    const [playlist, setPlaylist] = useState<apiPlaylistType | null>(null)
    const id = route?.params.id
    const type : "playlist" | "album" = route?.params.type as "playlist" | "album"


    useEffect(()=>{
        const getPlaylist = async ()=>{
            const result = await WebApiCalls(endpoints(id)[type], GET)
            setPlaylist(result)
        }
        getPlaylist()
    },[id])

    if(!playlist){
        return
    }

    return (
        <ScrollView>
            <MainImage url={playlist.images[0].url}/>
            {/* <Text style={{color : "white"}}>{JSON.stringify(playlist,undefined,2)}</Text> */}
        </ScrollView>
    )
}