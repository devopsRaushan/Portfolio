import React, { useState, useEffect } from 'react';
import getDataById from '../../utils/getDataById';

function GetProfile({ id }) {
  const backendApi = "http://localhost:8080/profiles";
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getDataById(id, backendApi);
        setData(profileData);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="GetProfile">
      <div className="GetProfile__overview">
        <div>
          <h3>{data.jobRole}</h3>
          <p>{data.companyName} | {data.officeVenue}</p>
        </div>
        <h4>{data.description}</h4>
        <p><b>Responsibility: </b>{data.roleResponsibility}</p>
        <p><b>Skills: </b>{data.skillsHave}</p>
        <p><b>Softwares used: </b>{data.softwaresUsed}</p>
        <p><b>Job Location: </b>{data.officeVenue}</p>
        <p>{data.masteryLevel} level</p>
        <p>{data.joinedDate}</p>
        <p>{data.companyName}</p>
        <p>{data.projects}</p>
        <p>{data.projectReference}</p>
      </div>
    </div>
  );
}

export default GetProfile;