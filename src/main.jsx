import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import '../index.css'
import "./app.css";
import WorkoutsContextProvider from "./context/WorkoutsContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
);
