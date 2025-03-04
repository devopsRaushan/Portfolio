import Skills from "./Skills";

// skill-icons
import csharp from "../../../src/assets/Main_Qualification_SkillSet_Skill--icons/csharp.svg";
import github from "../../../src/assets/Main_Qualification_SkillSet_Skill--icons/github.svg";
import nodejs from "../../../src/assets/Main_Qualification_SkillSet_Skill--icons/nodejs.svg";
import react from "../../../src/assets/Main_Qualification_SkillSet_Skill--icons/react.svg";
import machineLearning from "../../../src/assets/Main_Qualification_SkillSet_Skill--icons/ai.svg";

// skill Descriptions
import CsharpSkillDescription from "./CsharpSkillDescription";
import GithubSkillDescription from "./GithubSkillDescription";
import NodejsSkillDescription from "./NodejsSkillDescription";
import ReactSkillDescription from "./ReactSkillDescription";
import MachineLearningSkillDescription from "./MachineLearningSkillDescription";

function Qualification() {
  const skills = [
    {
      logo: csharp,
      logoName: "Csharp",
      name: ".Net Core & MVC",
      skill: <CsharpSkillDescription />,
    },
    {
      logo: github,
      logoName: "Github",
      name: "Git & GitHub",
      skill: <GithubSkillDescription />,
    },
    {
      logo: nodejs,
      logoName: "Node.js",
      name: "Back-end Development",
      skill: <NodejsSkillDescription />,
    },
    {
      logo: react,
      logoName: "React",
      name: "Front-end Development",
      skill: <ReactSkillDescription />,
    },
    {
      logo: machineLearning,
      logoName: "Machine-Learning",
      name: "Machine & Deep Learning",
      skill: <MachineLearningSkillDescription />,
    },
  ];
  return (
    <div className="Main_Qualification_skillSet__grid">
      <h3 className="Main_Qualification_skillSet__grid--gridItem">Skill-Set</h3>
      <div className="Main_Qualification_skillSet__grid--cards">
        {skills.map((skill, index) => (
          <div key={index}>
            <Skills
              skillLogo={skill.logo}
              skillLogoName={skill.logoName}
              skill={skill.name}
              skillSet={skill.skill}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Qualification;
