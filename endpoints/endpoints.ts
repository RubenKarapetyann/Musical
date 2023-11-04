export default function endpoints(id? : string){
    return {
        releases : "browse/new-releases",
        featured : "browse/featured-playlists",
        playlist : `playlists/${id}`,
        album : `albums/${id}`
    }
}