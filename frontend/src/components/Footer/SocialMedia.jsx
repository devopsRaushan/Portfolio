function SocialMedia({ SocialMediaIcons, SocialMediaName, SocialMediaLink }) {
  return (
    <a className="Footer__socialMediaHandle--icons" href={SocialMediaLink} target="_blank" rel="noopener noreferrer" >
      <img
        src={SocialMediaIcons}
        alt={SocialMediaName}
        style={{ width: "3rem", height: "2.5rem", opacity: "1" }}
      />
    </a>
  );
}
export default SocialMedia;
