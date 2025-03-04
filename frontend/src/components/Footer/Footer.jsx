import SocialMediaHandler from "./SocialMediaHandler";
function Footer() {
  return (
    <>
      <div className="Footer__socialMedia">
        <SocialMediaHandler />
      </div>
      <div className="Footer__contacts">
        <h3>811311 | Bihar, India</h3>
      </div>
      <div className="copyright">
        <h3>Copyright &copy; KRaushan</h3>
      </div>
    </>
  );
}
export default Footer;
