const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
// const { isValid } = require("zod");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ mgs: "Unauthorized HTTP, Token not Provided" });
  }

  const jwtToken = token.replace("Bearer ", "");
  console.log(jwtToken, "\n");

  try {
    const isVerified = await jwt.verify(jwtToken, process.env.JWT_KEY);
    console.log("token check", isVerified);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = jwtToken;
    req.userId = userData._id;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({ msg: "Unauthorized. Invalid Token." });
  }
};
module.exports = authMiddleware;
