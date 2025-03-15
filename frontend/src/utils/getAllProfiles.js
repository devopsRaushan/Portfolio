import axios from 'axios';

const getAllProfiles = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching profiles:', error);
        throw error;
    }
};

export default getAllProfiles;