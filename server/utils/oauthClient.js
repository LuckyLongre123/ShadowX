const { google } = require("googleapis");
require("dotenv").config();

const oauthClient = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "postmessage"
);

const getUserInfo = async (accessToken) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch user info from Google");
  }
};

// Function to exchange code for tokens
// const getTokensFromCode = async (code) => {
//   try {
//     console.log("Client ID:", process.env.GOOGLE_CLIENT_ID);
//     console.log("Client Secret:", process.env.GOOGLE_CLIENT_SECRET);

//     const { tokens } = await oauthClient.getToken(code); // Exchange code
//     oauthClient.setCredentials(tokens);
//     return tokens;
//   } catch (err) {
//     throw new Error(`Failed to exchange code for tokens ${err}`);
//   }
// };

module.exports = { oauthClient, getUserInfo };
