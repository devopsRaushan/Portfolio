import axios from 'axios';

const updateDataById = async (id, url, data) => {
    try {
        const response = await axios.put(`${url}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

export default updateDataById;