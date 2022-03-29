import {BrowserRouter , Route , Routes} from "react-router-dom";
import MainPage from "./components/modules/MainPage";
import SignInUp from "./components/modules/SIgnInUp";
import './App.css';
import Boards from "./components/modules/Boards";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/register" element={<SignInUp type="register" />}/>
          <Route path="/login" element={<SignInUp type="login" />}/>
          <Route path="/boards" element={<Boards />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
