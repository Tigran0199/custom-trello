import {BrowserRouter , Route , Routes} from "react-router-dom";
import MainPage from "./components/modules/MainPage";
import SignInUp from "./components/modules/SIgnInUp";
import Boards from "./components/modules/Boards";
import WorkBoard from "./components/modules/WorkBoard";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/register" element={<SignInUp type="register" />}/>
          <Route path="/login" element={<SignInUp type="login" />}/>
          <Route path="/boards" element={<Boards />}/>
          <Route path="/myBoard" element={<WorkBoard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
