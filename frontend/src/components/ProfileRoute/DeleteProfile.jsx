import React from 'react';
import { useParams } from 'react-router-dom';
import deleteDataById from '../../utils/deleteDataById';

const DeleteProfile = ({ onDelete }) =>
{
    const { id: userId } = useParams();
    const backendApi = import.meta.env.VITE_BACKEND_API_URL;

    const handleDelete = async () =>
    {
        try
        {
            await deleteDataById(userId, backendApi);
            if (onDelete)
            {
                onDelete();
            }
        } catch (error)
        {
            console.error('Failed to delete profile:', error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Profile</button>
        </div>
    );
};

export default DeleteProfile;