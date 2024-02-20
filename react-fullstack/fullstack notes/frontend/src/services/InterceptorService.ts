import axios, { AxiosRequestHeaders } from "axios";

class InterceptorService {
    createInterceptors() {
        axios.interceptors.request.use(req => {
            const token = window.localStorage.getItem('token');
            req.headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } as unknown as AxiosRequestHeaders
            return req
        })
    }
}

export const interceptorService = new InterceptorService();