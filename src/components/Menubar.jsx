import React, { useState } from 'react';
import { GoHomeFill } from "react-icons/go"; // Home
import { IoRocket } from "react-icons/io5"; // Project
import { FaCircleInfo } from "react-icons/fa6"; //About
import { FaMedal } from "react-icons/fa"; // Experience
import { TbTimeline } from "react-icons/tb"; // Timeline

const Menubar = () => {
    const [activeItem, setActiveItem] = useState('settings');

    const navItems = [
        { id: 'home', icon: GoHomeFill, label: 'Home' },
        { id: 'settings', icon: IoRocket, label: 'Project' },
        { id: 'profile', icon: FaCircleInfo, label: 'About' },
        { id: 'notifications', icon: FaMedal, label: 'Experience' },
        { id: 'favorites', icon: TbTimeline, label: 'Timeline' },
    ];

    return (
        <div className="flex justify-center items-center ">
            <nav className="bg-black rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center space-x-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`relative p-2 rounded-full transition-all duration-300 ease-in-out group ${isActive
                                    ? 'bg-white text-black transform scale-110'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                                    }`}
                                aria-label={item.label}
                            >
                                <Icon
                                    size={20}
                                    className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'
                                        }`}
                                />

                                {/* Tooltip */}
                                <div className="tooltip invisible group-hover:visible absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded transition-all duration-200 whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </nav>
            <style>
                {`
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tooltip {
  animation: slideUp 0.3s ease forwards;
}

                `}
            </style>
        </div>
    );
};

export default Menubar;