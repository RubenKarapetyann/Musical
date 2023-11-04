import { FunctionComponent } from "react"
import { navigationProps } from "./Props-Types"

export interface IHomeToolStack { 
    displayName : string,
    id : number,
    icon : string,
    stack : string
    screen : FunctionComponent<navigationProps>
}