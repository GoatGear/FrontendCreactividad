import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
});

instance.interceptors.request.use(
    (config) => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('@token');

        // Si el token existe, añadirlo al header 'token'
        if (token) {
            config.headers['token'] = token;
        }

        return config;
    },
    (error) => {
        // Manejar errores de solicitud
        return Promise.reject(error);
    }
);

export default instance