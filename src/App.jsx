import { Route, Routes } from "react-router-dom";
import "./App.css";
import TeacherList from "./pages/TeacherList";
import AddTeacher from "./pages/AddTeacher";
import Dashboard from "./pages/Dashboard";
import TeacherDetail from "./pages/TeacherDetail";
import { useEffect, useState } from "react";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const storedTeachers = localStorage.getItem("teachers");
        if (storedTeachers) {
            setTeachers(JSON.parse(storedTeachers));
        }
    }, []);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="teachers" element={<TeacherList teachers={teachers} setTeachers={setTeachers} />} />
      <Route path="addTeacher" element={<AddTeacher teachers={teachers} setTeachers={setTeachers} />} />
      <Route path="teacherDetail/:id" element={<TeacherDetail />} />
    </Routes>
  );
}

export default App;
