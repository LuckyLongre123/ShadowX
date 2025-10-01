import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleWrapper = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleWrapper;
