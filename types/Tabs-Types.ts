import React, { FunctionComponent } from "react";

export interface ITab{ 
    displayName : string,
    id : number,
    icon : string,
    activeIcon : string,
    screen : FunctionComponent,
    name : string
}