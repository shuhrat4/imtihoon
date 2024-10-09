import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Bella from "../assets/icons/bella.png"
import Call from "../assets/icons/call-calling.svg"
import SMS from "../assets/icons/sms.svg"
import Teacher from "../assets/icons/teacher.svg"

function TeacherDetail() {
    const navigate=useNavigate()
    const { id } = useParams(); 
    const [teacher, setTeacher] = useState();

    useEffect(() => {
        const teachersData = JSON.parse(localStorage.getItem("teachers"));

        if (teachersData) {
            const selectedTeacher = teachersData.find(
                (teacher) => teacher.id === id || teacher.id === parseInt(id)
            );
            setTeacher(selectedTeacher);
        }
    }, [id]);
    console.log(teacher);

    const handleSignOut = () => {
        localStorage.removeItem('users'); 
        navigate('/');
      };


    if (!teacher) {
        return <div>Loading...</div>;
    }
    return (
        <div className='flex'>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 h-screen">

                {/* Header */}
                <header className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-md">
                    <div className=""></div>
                    <div className="flex items-center">
                        <button className="mr-4"><img src={Bella} alt="Notification" /></button>
                        <button onClick={handleSignOut} className="bg-blue-500 text-white px-4 py-2 rounded-md">Log out</button>
                    </div>
                </header>

                {/* Profile Section */}
                <div className="flex items-center gap-10 justify-center mt-32 p-6">

                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={teacher.image || "https://via.placeholder.com/150"}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Name and Email */}
                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-semibold text-gray-800">{teacher.name}</h2>
                            <p className="text-gray-500">{teacher.email}</p>
                        </div>
                        {/* Contact Icons */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button className="p-3 bg-gray-200 rounded hover:bg-blue-300">
                                <img src={Teacher} alt="" />
                            </button>
                            <button className="p-3 bg-gray-200 rounded hover:bg-blue-300">
                                <img src={Call} alt="" />
                            </button>
                            <button className="p-3 bg-gray-200 rounded hover:bg-blue-300">
                                <img src={SMS} alt=''/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        {/* About Section */}
                        <div className="mt-6 max-w-xl text-left">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">About</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {teacher.about || "No details available."}
                            </p>
                        </div>

                        {/* Information Grid */}
                        <div className="grid grid-cols-2 gap-y-6 gap-x-20 mt-6 text-center max-w-md">
                            <div>
                                <p className="font-semibold text-gray-700">Subject</p>
                                <p className="text-gray-500">{teacher.subject}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Class</p>
                                <p className="text-gray-500">{teacher.class}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Age</p>
                                <p className="text-gray-500">{teacher.age}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Gender</p>
                                <p className="text-gray-500">{teacher.gender}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeacherDetail