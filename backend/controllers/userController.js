import User from "../models/userModel.js";

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
        token: null,
      });
    } catch (error) {
      res.status(401);
      throw error;
    }

    // res.send(user);
  } catch (err) {
    next(err);
  }
};

export { authUser };
