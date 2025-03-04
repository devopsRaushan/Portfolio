import SocialMedia from "./SocialMedia";
import Twitter from "../../assets/Main_Qualification_SkillSet_Skill--icons/twitter.svg";
import Linkedin from "../../assets/Main_Qualification_SkillSet_Skill--icons/linkedin.svg";
import Mail from "../../assets/Main_Qualification_SkillSet_Skill--icons/mail.svg";
import Instagram from "../../assets/Main_Qualification_SkillSet_Skill--icons/instagram.svg";

function SocialMediaHandler() {
  const SocialMediaHandles = [
    { icon: Twitter, name: "Twitter", link: "https://twitter.com/" },
    { icon: Linkedin, name: "Linkedin", link: "https://linkedin.com/" },
    { icon: Mail, name: "Mail", link: "mailto:ummhacker@hotmail.com" },
    { icon: Instagram, name: "Instagram", link: "https://instagram.com/" },
  ];

  return (
    <>
      {SocialMediaHandles.map((item, index) => (
        <div className="Footer__socialMediaHandle" key={index}>
          <SocialMedia
            SocialMediaIcons={item.icon}
            SocialMediaName={item.name}
            SocialMediaLink={item.link}
          />
        </div>
      ))}
    </>
  );
}
export default SocialMediaHandler;
