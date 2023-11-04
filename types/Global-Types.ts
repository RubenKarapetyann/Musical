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