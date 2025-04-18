import { useStore } from '@/stores/useStore';
import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_ECOTRUEKE;

const ecoTruekeApi = axios.create({
    baseURL: API_URL
});

ecoTruekeApi.interceptors.request.use(
    (config) => {
        const token = useStore.getState().user.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            config.headers['Content-Type'] = "application/json"
        }
        return config;
    }
)

export default ecoTruekeApi;