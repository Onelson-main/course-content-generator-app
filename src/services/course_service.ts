import { toast } from "react-toastify"
import { get } from "./webClient"

export const getCourses = async () => {
    try {
        let res = await get('courses')
        let { data } = await res?.json()
        return data || []
    } catch (err) {
        console.log(err)
        return []
    }
}


export const getCourseByName = async (title: string) => {
    try {
        let res = await get(`courses/${title}?mode=title`)
        let { data } = await res?.json()
        if (res?.status == 200) {
            return { status: true, data }
        } else {
            return { status: false, data: {} }
        }
    } catch (err) {
        console.log(err)
        return { status: false, data: {} }
    }
}

export const getCourseByID = async (id: number) => {
    try {
        let res = await get(`courses/${id}`)
        let { data } = await res?.json()
        if (res?.status == 200) {
            return { status: true, data }
        } else {
            return { status: false, data: {} }
        }
    } catch (err) {
        console.log(err)
        return { status: false, data: {} }
    }
}