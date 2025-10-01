import { createContext, useContext } from "react";
import { useTheme } from "./ThemeContext";
import { toast } from "react-toastify";
import axios from "axios"; // ✅ Import axios

// Create OAuth context
const OAuthContext = createContext();
// Provider component
export const OAuthProvider = ({ children }) => {
  const { URI } = useTheme();

  //! GOOGLE LOGIN
  const handleGoogleResponse = async (authCode) => {
    console.log("Google Auth Code:", authCode?.code);

    try {
      const response = await axios.post(`${URI}/api/auth/login/oauth/google`, {
        code: authCode.code,
      });

      if (response.data.success) {
        console.log(response);
        toast("Google Login Successfully ✅");
        // setToken(() => {
        localStorage.setItem("Token", response.data.token);
        // response.data.token;
        // });
        window.location.assign("/");
      } else {
        toast.error("Google Login failed ❌");
      }
    } catch (error) {
      toast.error("Google Login failed ❌");
      console.error("Error while sending code to server:", error);
    }
  };

  return (
    <OAuthContext.Provider value={{ handleGoogleResponse }}>
      {children}
    </OAuthContext.Provider>
  );
};

// Custom hook
export const useOAuth = () => {
  const context = useContext(OAuthContext);
  if (!context) {
    throw new Error("useOAuth must be used within an OAuthProvider");
  }
  return context;
};
