import React from 'react';
import GetProfile from "../../ProfileRoute/GetProfile";

function ProfileCards() {
  return (
    <div className="ProfileCards">
      <div className="ProfileCards--item">
        <GetProfile id="5" />
      </div>
      <div className="ProfileCards--item">
        <GetProfile id="8" />
      </div>
    </div>
  );
}

export default ProfileCards;