import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getAllProfiles from '../../utils/getAllProfiles';

const ProfileManagement = () =>
{
    const [profiles, setProfiles] = useState([]);
    const backendApi = import.meta.env.VITE_BACKEND_API_URL;

    useEffect(() =>
    {
        const fetchProfiles = async () =>
        {
            try
            {
                const data = await getAllProfiles(backendApi);
                setProfiles(data);
            } catch (error)
            {
                console.error('Failed to fetch profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

    const handleDelete = (id) =>
    {
        // Remove the deleted profile from the state
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div>
            <h2>Profile Management</h2>
            {profiles.length > 0 ? (
                profiles.map(profile => (
                    <div key={profile.id}>
                        <p>ID: {profile.id} - Name: {profile.name}</p>
                        <Link to={`/update/${profile.id}`}><button>Update Profile</button></Link>
                        <Link to={`/delete/${profile.id}`}><button>Delete Profile</button></Link>
                    </div>
                ))
            ) : (
                <p>No profiles available</p>
            )}
        </div>
    );
};

export default ProfileManagement;