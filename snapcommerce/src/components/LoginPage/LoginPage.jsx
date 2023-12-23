import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login.jsx";
import SignUp from "./component/SignUp/SignUp.jsx";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
