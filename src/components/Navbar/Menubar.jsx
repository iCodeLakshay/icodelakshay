import React, { useState } from 'react';
import { GoHomeFill } from "react-icons/go"; // Home
import { IoRocket } from "react-icons/io5"; // Project
import { FaCircleInfo } from "react-icons/fa6"; //About
import { FaMedal } from "react-icons/fa"; // Experience
import { TbTimeline } from "react-icons/tb"; // Timeline
import Link from 'next/link';

const Menubar = ({ isMobile = false, onItemClick }) => {
    const [activeItem, setActiveItem] = useState('home');

    const navItems = [
        { id: 'home', icon: GoHomeFill, label: 'Home', href: '/#home' },
        { id: 'project', icon: IoRocket, label: 'Project', href: '/#project' },
        { id: 'about', icon: FaCircleInfo, label: 'About', href: '/#about' },
        { id: 'experience', icon: FaMedal, label: 'Experience', href: '/#experience' },
        { id: 'timeline', icon: TbTimeline, label: 'Timeline', href: '/#timeline' },
    ];

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        if (onItemClick) onItemClick();
    };

    if (isMobile) {
        return (
            <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                            className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? 'bg-white text-black'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                        >
                            <Link href={item.href}>
                            <Icon size={20} />
                            <span className="font-medium">{item.label}</span>
                            </Link>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center">
            <nav className="bg-black rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center space-x-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <Link key={item.id} href={item.href} scroll={true}>
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`relative p-2 rounded-full transition-all duration-300 ease-in-out group ${
                                    isActive
                                        ? 'bg-white text-black transform scale-110'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                                }`}
                                aria-label={item.label}
                            >
                                <Icon
                                    size={20}
                                    className={`transition-all duration-300 ${
                                        isActive ? 'scale-110' : 'group-hover:scale-105'
                                    }`}
                                />

                                {/* Tooltip */}
                                <div className="tooltip invisible group-hover:visible absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded transition-all duration-200 whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            </button>
                            </Link>
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