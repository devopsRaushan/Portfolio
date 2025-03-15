import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteProfile from './DeleteProfile';
import getAllProfiles from '../../utils/getAllProfiles';

const ProfileManagement = () =>
{
    const [profiles, setProfiles] = useState([]);
    const backendApi = "http://localhost:8080/profiles";

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
                        <p>ID: {profile.id}</p>
                        <p>Description: {profile.description}</p>
                        <p>Skills Have: {profile.skillsHave}</p>
                        <p>Softwares Used: {profile.softwaresUsed}</p>
                        <p>Job Role: {profile.jobRole}</p>
                        <p>Role Responsibility: {profile.roleResponsibility}</p>
                        <p>Office Venue: {profile.officeVenue}</p>
                        <p>Mastery Level: {profile.masteryLevel}</p>
                        <p>Working Experience: {profile.workingExperience}</p>
                        <p>Joined Date: {profile.joinedDate}</p>
                        <p>Company Name: {profile.companyName}</p>
                        <p>Projects: {profile.projects}</p>
                        <p>Project Reference: {profile.projectReference}</p>
                        <Link to={`/update/${profile.id}`}><button>Update Profile</button></Link>
                        <DeleteProfile userId={profile.id} onDelete={() => handleDelete(profile.id)} />
                    </div>
                ))
            ) : (
                <p>No profiles available</p>
            )}
        </div>
    );
};

export default ProfileManagement;