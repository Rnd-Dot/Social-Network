import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "90d38e1f-b504-4d50-ba35-108bbc91a639"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}



export const setUsersDataAPI = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}


export const profileAPI = {
    setUsersProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status) {
        return instance.put(`profile/status`,{status : status})
            .then(response => {
                return response.data
            })
    }

}
