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
    },

    follow(id) {
        return instance.post(`follow/${id}`, {})
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`, {})
    }
}



export const profileAPI = {
    setUsersProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export const loginAPI = {
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })

    },
    logout() {
        return instance.delete(`auth/login`)
    },
    me() {
        return instance.get(`auth/me`)
    }
}

export const securityAPI = {
     getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
     }
}
