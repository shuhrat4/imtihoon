import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Bella from "../assets/icons/bella.png"
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from "../assets/images/Frame.png"
import Img from "../assets/images/person.png"
import { Link, useNavigate } from 'react-router-dom';

function TeacherList({ teachers, setTeachers }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTeacher, setEditingTeacher] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        class: '',
        email: '',
        gender: ''
    });

    useEffect(() => {
        localStorage.setItem('teachers', JSON.stringify(teachers));
    }, [teachers]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Edit teacher (open modal with teacher's details)
    const editTeacher = (id) => {
        const teacher = teachers.find(t => t.id === id);
        setEditingTeacher(teacher);
        setFormData({
            name: teacher.name,
            subject: teacher.subject,
            class: teacher.class,
            email: teacher.email,
            gender: teacher.gender
        });
        setIsModalOpen(true);
    };

    // Save edited teacher details
    const saveTeacher = () => {
        const updatedTeachers = teachers.map(t =>
            t.id === editingTeacher.id ? { ...t, ...formData } : t
        );
        setTeachers(updatedTeachers);
        setIsModalOpen(false);
        setEditingTeacher(null); // Reset editingTeacher state
    };

    // Delete teacher
    const deleteTeacher = (id) => {
        const updatedTeachers = teachers?.filter(teacher => teacher.id !== id);
        setTeachers(updatedTeachers);
    };

    // Filter teachers based on search query (by name or email)
    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSignOut = () => {
        localStorage.removeItem('users'); 
        navigate('/');
      };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1">

                <header className="flex justify-between items-center py-5 pr-36 pl-20 bg-gray-100 shadow-md">
                    <div className=""></div>
                    <div className="flex items-center">
                        <button className="mr-4"><img src={Bella} alt="icon" /></button>
                        <button onClick={handleSignOut} className="text-black px-4 py-2 rounded-md">Log out</button>
                    </div>
                </header>
                <div className="py-10 pr-36 pl-20 flex-1 ">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Teachers</h1>
                        <button onClick={() => navigate("/addTeacher")} className="bg-blue-500 text-white py-2 px-4 rounded-md">Add Teachers</button>
                    </div>

                    <input
                        type="text"
                        placeholder="Search for a teacher by name or email"
                        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {
                        teachers.length > 0 ? (
                            <table className="min-w-full bg-white overflow-hidden">
                                <thead className="text-gray-600">
                                    <tr>
                                        <th className="py-4 px-2 text-left text-xl">Name</th>
                                        <th className="py-4 px-2 text-left text-xl">Subject</th>
                                        <th className="py-4 px-2 text-left text-xl">Class</th>
                                        <th className="py-4 px-2 text-left text-xl">Email address</th>
                                        <th className="py-4 px-2 text-left text-xl">Gender</th>
                                        <th className="py-4 px-2 text-left text-xl">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTeachers.length > 0 ? (
                                        filteredTeachers.map((teacher, index) => (
                                            <tr key={teacher.id} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                                <td>
                                                    <Link to={`/teacherDetail/${teacher.id}`} className="py-2 px-4 flex items-center">
                                                        <img src={teacher.image} alt={teacher.name} className="w-10 h-10 rounded-full mr-2" />
                                                        {teacher.name}
                                                    </Link>
                                                </td>
                                                <td className="py-2 px-4">{teacher.subject}</td>
                                                <td className="py-2 px-4">{teacher.class}</td>
                                                <td className="py-2 px-4">{teacher.email}</td>
                                                <td className="py-2 px-4">{teacher.gender}</td>

                                                <td className="py-2 px-4 flex space-x-2">
                                                    <button onClick={() => editTeacher(teacher.id)} className="text-blue-500">
                                                        <FaEdit />
                                                    </button>
                                                    <button onClick={() => deleteTeacher(teacher.id)} className="text-red-500">
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="py-4 text-center">No teachers found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        ) : (
                            <img src={Image} alt='img' />

                        )
                    }


                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Teacher</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Class</label>
                            <input
                                type="text"
                                name="class"
                                value={formData.class}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Gender</label>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Image</label>
                            <input
                                type="file"
                                name="image"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();

                                    reader.onloadend = () => {
                                        setFormData(prev => ({ ...prev, image: reader.result }));
                                    };

                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={saveTeacher} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
                            <button onClick={() => setIsModalOpen(false)} className="ml-2 bg-gray-500 text-white py-2 px-4 rounded-md">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeacherList