function Skills({ skillLogo, skillLogoName, skill, skillSet }) {
  return (
    <div className="grid__cards--skill">
      <div className="cards__skill--contents">
        <img
          src={skillLogo}
          alt={skillLogoName}
          style={{ width: "2rem", height: "2rem", opacity: "0.8" }}
        />
      </div>

      <div className="cards__skill--contents">
        <span className="skill__contents--boxShadow" style={{ color: "#5c4545", fontWeight: 700 }}>{skill}</span>
      </div>

      <div className="cards__skill--contents">
        <div className="contents__mainContainer">{skillSet}</div>
      </div>
      
    </div>
  );
}
export default Skills;
