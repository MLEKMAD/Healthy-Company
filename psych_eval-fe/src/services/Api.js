import axios from 'axios';

const API_ROOT = 'http://localhost:8083/';
const TIMEOUT = 60000;
const HEADERS = {
    'Content-Type': 'application/json',
    responseType: 'blob',
    'Access-Control-Allow-Origin': '*',
};

class ApiService {

    constructor(headers) {
        const client = axios.create({
            API_ROOT,
            TIMEOUT,
            headers
        });

        client.interceptors.response.use(this.handleSuccess, this.handleError);
        this.client = client;

    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(path) {
        return this.client.get(path).then(response => response.data);
    }

    post(path, payload) {
        return this.client.post(path, payload).then(response => response.data);
    }

    put(path) {
        return this.client.put(path).then(response => response.data);
    }
}

export default ApiService;