import axios from "axios";

const instance = axios.create({
    withCredentials: true ,
    headers: {
        "API-KEY": "90d38e1f-b504-4d50-ba35-108bbc91a639"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
}) 

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data})
}

export const followAPI = (id) => {
    return instance.post(`follow/${id}`, {})
    .then(response => {
        return response.data})
}

export const unfollowAPI = (id) => {
    return instance.delete(`follow/${id}`, {})
    .then(response => {
        return response.data})
}

export const setUsersDataAPI = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response.data})
}


export const profileUsersAPI = (userId) => {
    return instance.get(`profile/` + userId)
    .then(response => {
        return response.data})
}