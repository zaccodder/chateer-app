import axios from "axios";


const baseUrl = "/api/v1/auth"

export const signup = (data) => {
    const request = axios.post(`${baseUrl}/sign-up`,
        data
    )
    return request.data
}



