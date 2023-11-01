export type MassiveCardProps = {
    name : string,
    image : string,
    subTitle? : string,
    id : string | number
}
export type HomeCollectorProps = {
    list : Array<MassiveCardProps>,
    title : string
}