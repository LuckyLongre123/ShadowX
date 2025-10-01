const User = require("../models/user-model");
const { getUserInfo, oauthClient } = require("../utils/oauthClient.js");

const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;
    console.log("google login req received...");
    let userInfo;
    try {
      const { tokens } = await oauthClient.getToken(code);
      console.log("Tokens received:", tokens);
      userInfo = await getUserInfo(tokens.access_token);
    } catch (err) {
      console.error("Token exchange failed:", err);
    }

    const { email, name, picture, id: googleId } = userInfo;

    let user = await User.findOne({ email });

    if (!user) {
      // Step 4: Create new user if doesn't exist
      user = new User({
        googleId,
        ProfileImage: picture,
        email,
        name,
      });
      await user.save();
    } else {
      // Update existing user's info
      user.ProfileImage = picture;
      user.name = name;
      if (!user.googleId) user.googleId = googleId;
      await user.save();
    }

    return res.json({
      success: true,
      token: await user.genarateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.error("❌ Google authentication error:", error);
    res.status(400).json({
      success: false,
      msg: "Authentication failed",
      error: error.message,
    });
  }
};

module.exports = {
  googleLogin,
};
