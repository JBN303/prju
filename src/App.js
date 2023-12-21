import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


import Alogin from "./components/Alogin";
import Psignup from "./components/Psignup";
import Plogin from "./components/Plogin";
import Doctorview from "./components/Doctorview";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/patient login' element={<Plogin/>}></Route>
      
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/patient register' element={<Psignup />}></Route>
      <Route path='/admin' element={<Alogin />}></Route>
      <Route path='/doctorview' element={<Doctorview />}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
