import Logos from "../../../../src/assets/Main_Qualification_SkillSet_Skill--icons/transparent.png";
function IconLogo() {
  return (
    <div className="IconLogo">
      <div className="IconLogo_Logo">
        <img
          src={Logos}
          alt="KRaushan Logo"
          style={{ width: "2rem", opacity: "0.8" }}
        />
      </div>
    </div>
  );
}
export default IconLogo;
