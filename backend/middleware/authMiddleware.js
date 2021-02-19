import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// auth middleware will be used to validate a json web token, thereby verfiying a user is authorized for a private route

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        // console.error(error);
        throw new Error("Not authorized, token failed");
      }
    } else {
      throw new Error("Not authorized, no token");
    }
    //next();
  } catch (error) {
    res.status(401);
    res.json({
      message: error.message,
    });
  }
};
export { protect };
