import { RiStarSFill } from "react-icons/ri";
import { TiTime } from "react-icons/ti";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import ProfileProgressImage from "./ProfileProgressImage";

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile--profile">
        <div className="Profile-flex">
          <h3>Profile</h3>
          <div className="Profile__info--container">
            <svg width="20" height="20">
              <circle
                cx="10"
                cy="10.5"
                r="7"
                fill="transparent"
                stroke="#ff6b6b"
                strokeWidth="1.5"
              />
            </svg>
            <div className="Profile__info--icon">i</div>
          </div>
        </div>
      </div>
      <ProfileProgressImage />
      <div className="Profile--items">
        Full-stack Web Developer
        <div>BPR Networks | Patna</div>
      </div>
      <div className="Profile--items Achievements">
        <div className="Achievements__item">
          <RiStarSFill className="Achievements__icon" />
        </div>
        <div className="Achievements__item">
          <TiTime className="Achievements__icon" />
        </div>
        <div className="Achievements__item">
          <IoCheckmarkDoneCircleOutline className="Achievements__icon" />
        </div>
        <div className="Achievements__item">
          <TiTime className="Achievements__icon" />
        </div>
      </div>
    </div>
  );
}
export default Profile;
