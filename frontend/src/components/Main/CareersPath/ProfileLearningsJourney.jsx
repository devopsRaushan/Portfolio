import React, { useState, useEffect } from 'react';
import getDataById from '../../../utils/getDataById';

function ProfileLearningsJourney({id})
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
            <div className="Journey">
                <p>DEMAND SKILLS: {data.skillsHave}</p>
                <p>Working Environment: 70% overall experience</p>
                <p>Seniors Experiences benefits: Self paced (Doesn't exist Seniors)</p>
                <div className="Learning__outcomes">
                    <h3>Accomplished 24 projects</h3>
                    <h3>Gained experience to solve and debug problems more than development</h3>
                    <h3>Sharpened my testing and debugging skills</h3>
                    <h3>Skilled up to practice optimal approaches and keep my eye sight to upskill myself</h3>
                </div>
            </div>

        </div>
    )
}
export default ProfileLearningsJourney;