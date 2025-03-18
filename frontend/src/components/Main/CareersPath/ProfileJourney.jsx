import React, { useState, useEffect } from 'react';
import Profile from "./Profile";
import ProfileCards from "./ProfileCards";

function ProfileJourney() {
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [initialProfileId, setInitialProfileId] = useState(null);

  const handleProfileSelect = (id) => {
    setSelectedProfileId(id);
  };

  useEffect((id) => {
    if (!initialProfileId) {
      setInitialProfileId(id);
    }
  }, [initialProfileId]);

  return (
    <>
      <div className="Journey">
        <div className="Journey__domain">
          <div className="Journey__domain--profile">
            <Profile id={selectedProfileId || initialProfileId} />
            <ProfileCards 
              onProfileSelect={handleProfileSelect} 
              initialProfileId={initialProfileId} 
              setInitialProfileId={setInitialProfileId} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileJourney;