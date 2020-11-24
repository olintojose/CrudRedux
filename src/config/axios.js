import axios from 'axios';

const clieteAxios = axios.create({
    baseURL:'http://localhost:4000/'

})

export default clieteAxios;