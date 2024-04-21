const User = require("../models/userModel");
exports.home = (req, res, next) => {
    res.status(202).json({ success: true, message: "this is test message" });
};
exports.register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, user });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.readall=async(req,res,next)=>{
    try {
        const user =await User.find().select("+password");
        await user.save();
        res.status(201).json({ success: true, user });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}