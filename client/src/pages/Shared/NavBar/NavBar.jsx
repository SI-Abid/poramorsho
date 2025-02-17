import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import profileIgm from '../../../assets/profileIgm.jpg'

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:bg-primary text-lg font-semibold duration-500 rounded-md'><Link to='/'>Home</Link></li>
                            <li className='hover:bg-primary text-lg font-semibold duration-500 rounded-md'><Link to='/dashboardMenu'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl hidden md:flex"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex space-x-20">
                        <li className='hover:bg-primary text-lg font-semibold duration-500 rounded-md'><Link to='/'>Home</Link></li>
                        <li className='hover:bg-primary text-lg font-semibold duration-500 rounded-md'><Link className='text-nature' to='/dashboardMenu' >Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={profileIgm} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <Link to='/login'><button className="btn btn-outline btn-primary mx-8">Login</button></Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;