import React from 'react'
import Sidebar from '../components/Sidebar'
import { FaHeadset } from 'react-icons/fa'
import Bella from "../assets/icons/bella.png"
import Admins from "../assets/icons/admins.png"
import Classes from "../assets/icons/admins.png"
import Students from "../assets/icons/students.png"
import Up from "../assets/icons/Vector.svg"
import { useNavigate } from 'react-router'

function Dashboard() {
    const navigate = useNavigate()
    const handleSignOut = () => {
        localStorage.removeItem('users');
        navigate('/');
    };
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1">
                {/* header ======>  */}
                <header className="flex justify-between items-center py-5 px-36 bg-gray-100 shadow-md">
                    <div className="text-sm">
                        <p>Learn how to launch faster</p>
                        <p>watch our webinar for tips from our experts and get a limited time offer.</p>
                    </div>
                    <div className="flex items-center">
                        <button className="mr-4"><img src={Bella} alt="icon" /></button>
                        <button onClick={handleSignOut} className="bg-blue-500 text-white px-4 py-2 rounded-md">Log out</button>
                    </div>
                </header>

                {/* main content ====> */}
                <div className="py-10 px-36 flex-1 relative">
                    <h2 className="text-3xl font-semibold mb-2">Welcome to your dashboard, Udemy school</h2>
                    <p className="text-gray-500 mb-8">Uyo/school/@teachable.com</p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                            <img className='w-9 h-9' src={Admins} alt="icon" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Add other admins</h3>
                                <p className="text-gray-500">Create rich course content and coaching products for your students.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                            <img className='w-9 h-9' src={Classes} alt="icon" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Add classes</h3>
                                <p className="text-gray-500">Create rich course content and coaching products for your students.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                            <img className='w-9 h-9' src={Students} alt="icon" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Add students</h3>
                                <p className="text-gray-500">Create rich course content and coaching products for your students.</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 right-40">
                        <button className="bg-[#152259] text-white px-10 py-4 rounded-full flex items-center gap-3">
                            <FaHeadset className="text-xl" /> Support <img src={Up} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard