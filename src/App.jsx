import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Pages/Home"
import VedioN from "./Pages/VedioN";
import Details from "./Pages/Details";
import StudentP from "./Pages/StudentP";
import TeacherP from "./Pages/TeacherP";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher"
import QP from "./Pages/QP";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login/>} />
          <Route path="/Student_Login" element={<Student />} />
          <Route path="/Teacher_Login" element={<Teacher />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Student_Profile" element={<StudentP />} />
          <Route path="/Teacher_Profile" element={<TeacherP/>}/>
          <Route path="/details" element={<Details />} />
          <Route path="/VideoNotes" element={<VedioN />} />
          <Route path="/QP" element={<QP />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
