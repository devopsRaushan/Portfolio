import axios from 'axios';

const deleteDataById = async (id, url) => {
    try {
        const response = await axios.delete(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

export default deleteDataById;