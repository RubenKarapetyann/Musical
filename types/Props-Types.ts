import { apiContentType, navigationType } from "./Global-Types"

export type MassiveCardProps = {
    name : string,
    image : string,
    subTitle? : string,
    id : string,
    handle : (id : string)=> void
}
export type HomeCollectorProps = {
    list : Array<apiContentType>,
    title : string,
    handle : (id : string)=> void
}
export type IconProps = {
    name : string,
    size? : number,
    color? : string,
    notifications? : number,
    pressHandle : ()=>void
}
export type navigationProps = {
    navigation : navigationType
}