import { FunctionComponent } from "react"

export interface IHomeToolStack { 
    displayName : string,
    id : number,
    icon : string,
    stack : string
    screen : FunctionComponent
}