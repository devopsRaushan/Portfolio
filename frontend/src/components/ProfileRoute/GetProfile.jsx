import React, { useState, useEffect } from 'react';
import { IoMdTime } from 'react-icons/io';
import getDataById from '../../utils/getDataById';
import ProfileImage from "./Profile_ProfileImage.png"

function GetProfile({ id })
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
    <>
      <div className="SkillProgress">
        <div className="profile">
          <img src={ProfileImage} alt="Profile_picture" />
          <div>
            <p>
              Raushan Kumar
            </p>
            <p>
              {data.jobRole}
            </p>
          </div>
        </div>
        <div className="Industry-Type">
          <div className="Industry">
            <h2>
              {data.companyName}
            </h2>
          </div>
          <div className="IndustryType">
            IndustryType: <b>Technical Development</b>
          </div>
        </div>
        <div className="SkillProgressBar">
          <div className="Bar">
            <div className="BarFiller" style={{ width: "34%" }}></div>
          </div>
          <div className="ProgressPercentage">
            <p>Skills Progress</p>
            <p>34%</p>
          </div>
        </div>
        <div className="SkillSelect"></div>
        <div className="SkillDocumentation"></div>
      </div>
      <div className="ProjectTime">
        <div className="Time">
          <div className="TotalProjectTime">
            <div className="ReactIconsTimeLogo">
              <IoMdTime />
            </div>
            <div>Total Project Time</div>
          </div>
          <div className="TotalProjectHour">
            345+ h
          </div>
        </div>
        <div className="Date">
          <div className='DateNumber'>{data.joinedDate.split("-")[2]}</div>
          <div className="Dates">
            <div className='Day'>{new Date(data.joinedDate).toLocaleString("en-us", { weekday: "long" })},</div>

            <div className='Month'>{new Date(data.joinedDate).toLocaleString("en-us", { month: "long" })}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetProfile;