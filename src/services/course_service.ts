import { get } from "./webClient"

// gets a list of available courses from the database
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

// gets details on a course using the course name
export const getCourseByName = async (title: string) => {
    try {
        let res = await get(`courses/search/?q=${title}`)
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

// gets details on a course using the course ID
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