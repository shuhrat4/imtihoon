import React from 'react'
import {  NavLink } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import Home from "../assets/icons/home.svg"
import Bank from "../assets/icons/bank.svg"
import Setting from "../assets/icons/setting.svg"
import Student from "../assets/icons/student.svg"
import Chart from "../assets/icons/chart-square.svg"

function Sidebar() {
    return (
        <div className="bg-[#152259] text-white w-64 h-screen p-5">
            <div className="flex flex-col items-center">
                <img src={Logo} alt="Logo" className="w-16 mb-4" />
                <h1 className="text-lg font-bold">Udemy Inter. school</h1>
            </div>
            <nav className="mt-10">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Home} alt="icon" />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/teachers"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Home} alt="icon" />
                    Teachers
                </NavLink>
                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Student} alt="icon" />
                    Students
                </NavLink>
                <NavLink
                    to="/billing"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Bank} alt="icon" />
                    Billing
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Setting} alt="icon" />
                    Settings and Profile
                </NavLink>
                <NavLink
                    to="/exams"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Chart} alt="icon" />
                    Exams
                </NavLink>
                <NavLink
                    to="/features"
                    className={({ isActive }) =>
                        `py-2 text-base px-4 rounded flex items-center gap-4 ${isActive ? 'bg-[#509CDB]' : ''}`
                    }
                >
                    <img src={Bank} alt="icon" />
                    Features
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar