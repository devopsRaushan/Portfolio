import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import updateDataById from '../../utils/updateDataById';
import getDataById from '../../utils/getDataById';

const UpdateProfile = () =>
{
    const { id: userId } = useParams();
    const backendApi = import.meta.env.VITE_BACKEND_API_URL;

    const [formData, setFormData] = useState({
        description: "",
        skillsHave: "",
        softwaresUsed: "",
        jobRole: "",
        roleResponsibility: "",
        officeVenue: "",
        masteryLevel: "",
        workingYearsExperience: "",
        joinedDate: "",
        companyName: "",
        ProjectsAccomplished: "",
        SeniorGuidance: "",
        ProblemSolvingFocus: "",
        TestingDebuggingSkills: "",
        ContinuousUpskilling: "",
        EmployeeWelfareExperience: "",
        WorkEnvironmentRating: "",
        projectReference: ""
    });

    useEffect(() =>
    {
        const fetchProfile = async () =>
        {
            try
            {
                const data = await getDataById(userId, backendApi);
                setFormData(data);
            } catch (error)
            {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            await updateDataById(userId, backendApi, formData);
            alert('Profile updated successfully!');
        } catch (error)
        {
            console.error('Failed to update profile:', error);
            alert('Error updating profile.');
        }
    };

    const renderInput = (name, type = "text") => (
        <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={`Enter ${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}`}
            required
        />
    );

    return (
        <div>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                {renderInput("description")}
                {renderInput("skillsHave")}
                {renderInput("softwaresUsed")}
                {renderInput("jobRole")}
                {renderInput("roleResponsibility")}
                {renderInput("officeVenue")}
                {renderInput("masteryLevel")}
                {renderInput("workingYearsExperience", "decimal")}
                {renderInput("joinedDate", "date")}
                {renderInput("companyName")}
                {renderInput("ProjectsAccomplished")}
                {renderInput("SeniorGuidance")}
                {renderInput("ProblemSolvingFocus")}
                {renderInput("TestingDebuggingSkills")}
                {renderInput("ContinuousUpskilling")}
                {renderInput("EmployeeWelfareExperience")}
                {renderInput("WorkEnvironmentRating")}
                {renderInput("projectReference")}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;