import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="marker:text-white flex justify-between m-4 z-30 ">
            <h1 className='font-display text-2xl md:text-4xl text-purple-700 font-bold z-30 '>{'</>'}</h1>
            <div className="flex gap-4 pointer-events-auto items-center text-xl font-display text-gray-600 z-30">
                <Link className='duration-100 text-sm hover:text-zinc-100 text-zinc-400 md:text-base lg:text-lg hidden md:block' to="/about#about-section">About Me</Link>
                <Link className='duration-100 text-sm hover:text-zinc-100 text-zinc-400 md:text-base lg:text-lg md:hidden' to="/about#about-section-sm">About Me</Link>
                <Link className='duration-100 text-sm hover:text-zinc-100 text-zinc-400 md:text-base lg:text-lg hidden md:block' to="/about#about-section">Skills</Link>
                <Link className='duration-100 text-sm hover:text-zinc-100 text-zinc-400 md:text-base lg:text-lg' to="/projects#project-section">
                    Projects
                </Link>
                <Link className='duration-100 text-sm hover:text-zinc-100 text-zinc-400 md:text-base lg:text-lg mr-3 md:mr-0' to="/connect#connect-section">
                    Let's Connect
                </Link>
            </div>
        </div>
    );
}

export default Header;
