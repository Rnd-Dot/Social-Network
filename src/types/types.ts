export type postType = {
    id: number
    message: string
    like_count: number
}

export type contactType = {
    gitHub: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photosType = {
    small: string | null
    large: string | null
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contact: contactType
    photos: photosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
}