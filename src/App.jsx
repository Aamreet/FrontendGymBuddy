import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  // console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <div className="App container">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/signup"></Navigate>}
            ></Route>
            <Route path="/login" element={!user? <Login/>: <Navigate to="/"></Navigate>}></Route>
            <Route path="/signup" element={!user? <Signup/>: <Navigate to="/"></Navigate>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
