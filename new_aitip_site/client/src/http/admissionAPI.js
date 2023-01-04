import {$authHost, $host} from "./index";


export const createDirectionBachelor = async (direction) => {
    const {data} = await $authHost.post("api/direction_bachelor/", direction)
    return data
}

export const fetchDirectionsBachelor = async (page=1, limit=8) => {
    const {data} = await $host.get("api/direction_bachelor/", {params: {page, limit}})
    console.log(data)
    return data
}

export const fetchOneDirectionBachelor = async (name) => {
    const {data} = await $host.get("api/direction_bachelor/" + name)
    console.log(data)
    return data
}