import ProfileImage from "../../../assets/Main_Qualification_SkillSet_Skill--icons/transparent.png";

function ProfileProgressImage() {
  return (
    <div className="Profile__progress">
      <div className="Progress__circle">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" className="bg-circle" />
          <circle
            cx="50"
            cy="50"
            r="40"
            className="progress-bar"
            style={{ strokeDashoffset: 251 - (251 * 69) / 100 }}
          />
        </svg>
        <img src={ProfileImage} alt="Profile-image" className="Profile-image" />
      </div>
    </div>
  );
}
export default ProfileProgressImage;
