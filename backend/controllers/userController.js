import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

// an asynchronous express route. Which means it will return a promise.
const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      await user.matchPassword(password);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } catch (error) {
      res.status(401);
      // throw error;
      res.json({
        message: error.message,
      });
    }

    // res.send(user);
  } catch (err) {
    next(err);
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = async (req, res, next) => {
  try {
    // res.send("Success");

    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (err) {
    next(err);
  }
};

export { authUser, getUserProfile };
