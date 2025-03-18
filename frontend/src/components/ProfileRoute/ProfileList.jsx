import React, { useState, useEffect } from 'react';
import getAllProfiles from '../../utils/getAllProfiles';

const ProfileList = ({ onProfileSelect, setInitialProfileId }) =>
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
        if (data.length > 0)
        {
          setInitialProfileId(data[0].id); // Set the initial profile ID to the first profile's ID
        }
      } catch (error)
      {
        console.error('Failed to fetch profiles:', error);
      }
    };

    fetchProfiles();
  }, [setInitialProfileId]);

  return (
    <div className="ProfileCards__item--selected">
      <select onChange={(e) => onProfileSelect(e.target.value)}>
        {profiles.map(profile => (
          <option key={profile.id} value={profile.id}>
            Id: {profile.id} | {profile.jobRole} | Skills: {profile.skillsHave} | Organization: {profile.companyName}, {profile.officeVenue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileList;