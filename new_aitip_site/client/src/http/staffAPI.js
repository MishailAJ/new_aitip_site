import {$authHost, $host} from "./index";


export const createStaffer = async (staff) => {
    const {data} = await $authHost.post("api/staff", staff)
    return data
}

export const fetchStaff = async (letter, post, academic_degree, page=1, limit=8) => {
    const {data} = await $host.get("api/staff", {params: {
            letter, post, academic_degree, page, limit
        }})
    console.log(data)
    return data
}

export const fetchOneStaffer = async (id) => {
    const {data} = await $host.get("api/staff/" + id)
    return data
}