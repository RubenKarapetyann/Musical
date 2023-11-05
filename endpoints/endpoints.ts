export default function endpoints(id? : string,query? : string){
    return {
        releases : "browse/new-releases",
        featured : "browse/featured-playlists",
        playlist : `playlists/${id}`,
        album : `albums/${id}`,
        track : `tracks/${id}`
    }
}