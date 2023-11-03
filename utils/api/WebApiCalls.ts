import { ACCESS_TOKEN, SERVICE } from "../../constants/API";

export default async function WebApiCalls(endpoint : string, method : string, body? : object){
    const response = await fetch(`${SERVICE}/${endpoint}`,{
        headers : {
            Authorization : "Bearer " + ACCESS_TOKEN
        },
        method,
        body : JSON.stringify(body)
    })
    return await response.json()
}