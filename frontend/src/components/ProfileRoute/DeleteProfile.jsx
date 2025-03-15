import deleteDataById from '../../utils/deleteDataById';

const DeleteProfile = ({ userId, onDelete }) => {
    const backendApi = "http://localhost:8080/profiles";

    const handleDelete = async () => {
        try {
            await deleteDataById(userId, backendApi);
            onDelete();
        } catch (error) {
            console.error('Failed to delete profile:', error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Profile</button>
        </div>
    );
};

export default DeleteProfile;