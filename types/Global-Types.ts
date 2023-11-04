export type navigationType = {
    navigate : Function
}
export type apiContentType = {
    name : string,
    images: apiImageType[],
    id : string
}
export type apiImageType = {
    url : string,
}
export type collectionType = {
    id : number,
    title : string,
    items : apiContentType[]
}
export type artistType = {
    name : string,
    id : string
}
export type apiPlaylistType = {
    name : string,
    images : apiImageType[],
    artists : artistType[],
    label : string,
    total_tracks : number,
    tracks : {
        items : trackType[]
    }
}
export type trackType = {
    artists : artistType[],
    id : string,
    name : string
}