import TopBar from "./Components/TopBar/TopBar";
import HomePage from "./pages/Home/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import WritePage from "./pages/WritePage/WritePage";
import SettingPage from "./pages/Settings/SettingPage";
import LoginPage from "./pages/Login/loginpage";
import RegisterPage from "./pages/Register/Registerpage";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  // if user is exist then goto home page if not exist then go to register page 
  // terniary operator use here
  const { user } = useContext(Context);
  return (
    <>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* if user exist then go to homepage else go to register page */}
          <Route path="/register" element={user ? <HomePage /> : <RegisterPage />} />

          {/* if user exist then go to homepage else go to login page */}
          <Route path="/login" element={user ? <HomePage /> : <LoginPage />} />

          {/* if user exist then go to writepage else go to register page */}
          <Route path="/write" element={user ? <WritePage /> : <RegisterPage />} />

          {/* if user exist then go to settingpage else go to register page */}
          <Route path="/setting" element={user ? <SettingPage /> : <RegisterPage />} />

          <Route path="/post/:postId" element={<SinglePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
