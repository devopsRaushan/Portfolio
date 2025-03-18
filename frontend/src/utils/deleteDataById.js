import axios from 'axios';

const deleteDataById = async (id, url) => {
    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

export default deleteDataById;