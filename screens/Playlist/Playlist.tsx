import { View, Text, ImageBackground } from "react-native"
import { useState, useEffect } from "react"
import WebApiCalls from "../../utils/api/WebApiCalls"
import endpoints from "../../endpoints/endpoints"
import { GET } from "../../constants/API"
import { navigationProps } from "../../types/Props-Types"
import MainImage from "../../components/global/Image/Image"
import { ScrollView } from "react-native"
import { apiPlaylistType, trackType } from "../../types/Global-Types"
import styles from "./Playlist.css"
import PlaylistCollector from "../../components/collectors/PlaylistCollector/PlaylistCollector"


export default function Playlist({ route } : navigationProps){
    const [playlist, setPlaylist] = useState<apiPlaylistType | null>(null)
    const id = route?.params.id
    const type : "playlist" | "album" = route?.params.type as "playlist" | "album"


    useEffect(()=>{
        const getPlaylist = async ()=>{
            const result = await WebApiCalls(endpoints(id)[type], GET)
            if(type === "playlist"){
                const FinalResult = {
                    name: result.name,
                    images: result.images,
                    artists: [result.tracks.items[0].track.album.artists[0]],
                    label: result.owner.display_name,
                    total_tracks: result.tracks.items.length,
                    tracks: {
                        items: result.tracks.items.map((track : any)=>({
                            artists : track.track.album.artists,
                            id : track.track.album.id,
                            name : track.track.album.name,
                            image : track.track.album.images[0].url
                        }))
                    }
                }
                setPlaylist(FinalResult)
            }else if(type === "album"){
                const FinalResult = {
                    name: result.name,
                    images: result.images,
                    artists: result.artists,
                    label: result.label,
                    total_tracks: result.total_tracks,
                    tracks: {
                        items: result.tracks.items.map((track : trackType)=>({
                            artists : result.artists,
                            id : track.id,
                            name : track.name,
                            image : result.images[0].url
                        }))
                    }
                }
                setPlaylist(FinalResult)
            }
        }
        getPlaylist()
    },[id, type])

    if(!playlist){
        return
    }

    return (
        <ScrollView>
            <ImageBackground
                style={styles.info}
                source={{
                    uri : playlist.images[0].url
                }}
                width={500}
                height={300}
                blurRadius={15}
                // resizeMode="cover"
            >
                <MainImage url={playlist.images[0].url}/>
                <Text style={styles.name}>{playlist.name}</Text>
                <Text style={styles.label}>{playlist.label}</Text>
            </ImageBackground>
            {/* <SmallCard/> */}
            <PlaylistCollector list={playlist.tracks.items}/>
                
            {/* <Text style={{color : "white"}}>{JSON.stringify(playlist,undefined,2)}</Text> */}
        </ScrollView>
    )
}