import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://smarketin.com.br/wp-json/jwt-auth/v1/'
    }
)
