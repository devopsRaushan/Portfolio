import ProfileProgressImage from "./ProfileProgressImage";
import { useState, useEffect } from 'react';
import getDataById from '../../../utils/getDataById';

function Profile({ id }) {
  const backendApi = import.meta.env.VITE_BACKEND_API_URL;
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

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="Profile">
      <div className="Profile--profile">
        <div className="Profile-flex">
          <h3>Profile</h3>
          <div className="Profile__info--container">
            <svg width="20" height="20">
              <circle cx="10" cy="10.5" r="7" fill="transparent" />
            </svg>
            <div className="Profile__info--icon">i</div>
          </div>
        </div>
      </div>
      <ProfileProgressImage />
      <div className="Profile--items">
        {data.jobRole}
        <div>{data.companyName} | {data.officeVenue}</div>
      </div>
      <div className="Profile--items Achievements">
        <div className="Achievements__item">
          <div className="Achievements__icon">10+</div>
        </div>
        <div className="Achievements__item">
          <div className="Achievements__icon smallFont">{data.masteryLevel}</div>
        </div>
        <div className="Achievements__item">
          <div className="Achievements__icon">{data.workingExperience}+</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;