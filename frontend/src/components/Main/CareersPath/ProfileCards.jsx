import React, { useState, useEffect } from 'react';
import GetProfile from "../../ProfileRoute/GetProfile";
import ProfileLearningsJourney from './ProfileLearningsJourney';
import ProfileList from "../../ProfileRoute/ProfileList";

function ProfileCards({ onProfileSelect, initialProfileId, setInitialProfileId })
{
  const [selectedProfileId, setSelectedProfileId] = useState(initialProfileId);

  const handleProfileSelect = (id) =>
  {
    setSelectedProfileId(id);
    onProfileSelect(id);
  };

  useEffect(() =>
  {
    if (!selectedProfileId && initialProfileId)
    {
      setSelectedProfileId(initialProfileId);
    }
  }, [selectedProfileId, initialProfileId]);

  return (
    <div className="ProfileCards">
      <div className="ProfileCards--item">
        <GetProfile id={selectedProfileId} />
      </div>
      <div className="ProfileCards__learningJourney">
        <ProfileLearningsJourney id={selectedProfileId} />
      </div>
      <div className="ProfileCards__item--list">
        <ProfileList onProfileSelect={handleProfileSelect} setInitialProfileId={setInitialProfileId} />
      </div>
    </div>
  );
}

export default ProfileCards;