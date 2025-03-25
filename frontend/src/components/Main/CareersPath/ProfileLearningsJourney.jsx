import React, { useState, useEffect } from 'react';
import getDataById from '../../../utils/getDataById';

function ProfileLearningsJourney({ id })
{
    const backendApi = import.meta.env.VITE_BACKEND_API_URL;
    const [data, setData] = useState(null);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const profileData = await getDataById(id, backendApi);
                setData(profileData);
            } catch (error)
            {
                console.error('Failed to fetch profile:', error);
            }
        };

        if (id)
        {
            fetchData();
        }
    }, [id]);

    if (!data) return <p>Loading...</p>;
    return (
        <div className="LearningsJourney">
            <div className="ProfileJourney">
                <div className="ProfileJourney__start">
                    <div className="StarRatings">
                        <h3>{data.workEnvironmentRating}</h3>Stars
                    </div>
                </div>
                <h5>Under Guidance: {data.seniorGuidance}</h5>
                <div className="ProfileJourney__start--withSkills">
                    <strong>{data.skillsHave}</strong>
                </div>

                <div className="Learning__outcomes">
                    <h5>Accomplished {data.projectsAccomplished} projects</h5>
                    <h5>{data.problemSolvingFocus}</h5>
                    <h5>{data.testingDebuggingSkills} </h5>
                    <h5>Skilled up: {data.continuousUpskilling} </h5>
                    <h5>Employees security: {data.employeeWelfareExperience} </h5>
                </div>
            </div>

        </div>
    )
}
export default ProfileLearningsJourney;