const {userService , emailService} = require("../services");

/* Create user */
const createUser = async(req,res) =>{
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);

        if(!user){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"user created successfully",
            data:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/* get user list */
const getUserList = async(req,res) =>{
    try {
       const userList = await userService.getUserList(req,res);

       res.status(200).json({
        success:true,
        message:"get user list successfully",
        data:userList
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete user */
const deleteUser = async(req,res) =>{
    try {
        const userId = req.params.userId;

        if(!userId){
            throw new Error("user not found");
        }

        await userService.deleteUser(deleteId);

        res.status(200).json({
            success:true,
            message:"user deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};



// update user
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("user not found!");
        }

        await userService.updateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "user details updated successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// send mail
const sendMail = async (req, res) => {
    try {
      await auth(req.headers.token, ['admin']);

      const reqBody = req.body;
      const sendEmail = await emailService.sendMail(
        reqBody.email,
        reqBody.subject,
        reqBody.text
      );
      if (!sendEmail) {
        throw new Error("Something went wrong, please try again or later.");
      }

      res
        .status(200)
        .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
module.exports ={
    createUser,
    getUserList,
    deleteUser,
    updateUser,
    sendMail
}