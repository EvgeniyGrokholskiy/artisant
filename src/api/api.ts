import axios from "axios";

const instance = axios.create({
    baseURL: 'https://artisant.io/api/products',
    headers: {'X-Custom-Header': 'foobar'}
});

export const test = () => {
}