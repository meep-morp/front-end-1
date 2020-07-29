import axios from 'axios';


export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        //This base url will change to our backend api
        baseURL: ''
    })
}