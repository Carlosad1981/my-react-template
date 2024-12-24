import axios from 'axios';

axios.defaults.withCredentials = true;

const sendDataRequest = async (endpoint, dataToSend = null, method = 'POST', isContentTypeText = true, withCredentials = false) => {
    const token = localStorage.getItem("token") ?? "";
    const url = `${import.meta.env.VITE_API_URL}/${endpoint}`;
    // Lembre-se de alterar o valor da constante VITE_API_URL no arquivo ".env" para seu servidor corretamente

    // Configuração dos headers
    const headers = {
        authorization: `Bearer ${token}`,
    };

    // Define Content-Type apenas para POST ou PUT
    if (isContentTypeText && ['POST', 'PUT'].includes(method)) {
        headers['Content-Type'] = 'application/json';
    }

    const config = {
        headers, withCredentials: withCredentials, // Resolve o envio automático de cookies
    };

    try {
        // Executa a requisição conforme o método HTTP
        const response = await axios({
            method, url, data: dataToSend, ...config,
        });

        return response.data;
    } catch (err) {
        throw {
            message: err.response?.data?.message || err.message, status: err.response?.status,
        };
    }
};

export default sendDataRequest;
