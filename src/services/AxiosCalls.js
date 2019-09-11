import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    withCredentials: false, // This is default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getRecords() {
        return apiClient.get('/todos/1')
    }
}
