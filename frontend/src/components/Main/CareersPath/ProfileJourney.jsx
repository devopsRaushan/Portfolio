import Profile from "./Profile";
import ProfileCards from "./ProfileCards";
function ProfileJourney() {
    return (
        <>
            <div className="Journey">
                <div className="Journey__domain">
                    <div className="Journey__domain--profile">
                        <Profile />
                        <ProfileCards />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileJourney;