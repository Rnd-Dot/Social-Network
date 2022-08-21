import axios from "axios";
import {profileType} from "../types/types"

export enum resultCode {
    Success = 0,
    Error = 1
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "90d38e1f-b504-4d50-ba35-108bbc91a639"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`, {})
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`, {})
    }
}

type updataStatusType = {
    resultCode: number
    messages: Array<string>
    data: any
}

export const profileAPI = {
    setUsersProfile(userId: number) {
        return instance.get<profileType>(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put<updataStatusType>(`profile/status`, { status: status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: profileType) {
        return instance.put(`profile`, profile)
    }

}

type meType = {
    data: {
        id:number
        email: string
        login: string
    }
    resultCode: resultCode
    messages: Array<string>
}

type loginType = {
    data: {
        userId:number
    }
    resultCode: resultCode
    messages: Array<string>
}

export const loginAPI = {
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<loginType>(`auth/login`, { email, password, rememberMe, captcha })

    },
    logout() {
        return instance.delete(`auth/login`)
    },
    me() {
        return instance.get<meType>(`auth/me`)
    }
}

export const securityAPI = {
     getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
     }
}
