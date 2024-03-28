import axios from "axios";

export async function fetchData(url, options = {}, page = 2, pageSize = 10) {
    try {
        const response = await axios({
            method: options.method || 'GET',
            url,
            params: { ...options.params, },
            headers: options.headers || {}, 
            data: options.data || null,
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Response Error:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request Error:', error.request);
        } else {
            console.error('Error:', error.message);
        }

        throw error;
    }
}
