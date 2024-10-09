import  { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Bella from "../assets/icons/bella.png"
import { useNavigate } from 'react-router-dom';

function AddTeacher({ teachers, setTeachers }) {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    fullName: "",
    class: "",
    email: "",
    gender: "",
    subject: "",
    age: "",
    about: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      image: URL.createObjectURL(file),
    }));
  };

  const addTeacherToLocalStorage = (newTeacher) => {
    const id = teachers.length ? Math.max(teachers.map(t => t.id)) + 1 : 1;
    const teacherWithId = { ...newTeacher, id };

    const updatedTeachers = [...teachers, teacherWithId];

    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    setTeachers(updatedTeachers);
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeacher = {
      id: Date.now(),
      name: teacher.fullName,
      class: teacher.class,
      email: teacher.email,
      gender: teacher.gender,
      subject: teacher.subject,
      age: teacher.age,
      about: teacher.about,
      image: teacher.image 
    };

    addTeacherToLocalStorage(newTeacher); 
    setTeacher({
      fullName: "",
      class: "",
      email: "",
      gender: "",
      subject: "",
      age: "",
      about: "",
      image: null,
    });

    navigate("/teachers");
  };
  const handleSignOut = () => {
    localStorage.removeItem('users'); 
    navigate('/');
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 pr-10">
        {/* Header */}
        <header className="flex justify-between items-center py-5 pr-10 bg-gray-100">
          <div className=""></div>
          <div className="flex items-center">
            <button className="mr-4 p-2 bg-white rounded-full shadow hover:bg-gray-200">
              <img src={Bella} alt="Notifications" />
            </button>
            <button onClick={handleSignOut} className="text-black px-4 py-2 rounded-md">Log out</button>
          </div>
        </header>

        {/* Form Content */}
        <div className="px-10">
          <form onSubmit={handleSubmit}>
            <div className="flex mb-10 items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-700">Add teacher</h2>
              {/* Save Button */}
              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={teacher.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Class */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Class</label>
                <input
                  type="text"
                  name="class"
                  value={teacher.class}
                  onChange={handleInputChange}
                  placeholder="Class"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={teacher.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                <select
                  name="gender"
                  value={teacher.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={teacher.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={teacher.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* About */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-2">About</label>
                <textarea
                  name="about"
                  value={teacher.about}
                  onChange={handleInputChange}
                  placeholder="Write something about the teacher..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 h-32"
                  required
                ></textarea>
              </div>

              {/* Import Image */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-semibold mb-2">Import Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher