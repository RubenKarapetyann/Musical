import { apiContentType, navigationType } from "./Global-Types"

export type MassiveCardProps = {
    name : string,
    image : string,
    subTitle? : string,
    id : string,
    handle : (id : string, type : string)=> void,
    type : string
}
export type HomeCollectorProps = {
    list : Array<apiContentType>,
    title : string,
    handle : (id : string, type : string)=> void,
    type : string
}
export type IconProps = {
    name : string,
    size? : number,
    color? : string,
    notifications? : number,
    pressHandle : ()=>void
}
export type navigationProps = {
    navigation? : navigationType,
    route? : { params : { id : string, type : string } }
}
export type imageProps = {
    url : string,
    size? : number,
    styles? : object
}