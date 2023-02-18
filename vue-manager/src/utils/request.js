import axios from 'axios'
const http=axios.create({
    baseURL:'/api',
    timeout:3000
})
export default http;