import FetchTest from "./FetchTest";
import Postcards from "./Postcards";
function ProfileCards() {
  return (
    <div className="ProfileCards">
        <div className="ProfileCards--item">
          <FetchTest />
        </div>
        <div className="ProfileCards--item">
          <Postcards />
        </div>
    </div>
  );
}
export default ProfileCards;
