import User from "../Models/user.model.js";

const getUsersForSidebar = async (req, res)=>{
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }
    catch (error){
        console.error("Error in getUserForSidebar controller: ", error)
        res.status(500).json({error: "Internal server error"});
    }
};

export default getUsersForSidebar;