import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ToastContainer } from "react-toastify";
import { OAuthProvider } from "./context/OAuthContext.jsx";
import GoogleWrapper from "./wrappers/GoogleWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleWrapper>
      <ThemeProvider>
        <OAuthProvider>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            // transition={Slide}
          />
        </OAuthProvider>
      </ThemeProvider>
    </GoogleWrapper>
  </StrictMode>
);
