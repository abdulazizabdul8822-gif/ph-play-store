import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { FaGithub } from 'react-icons/fa';
import MyNavLink from '../MyNavLink/MyNavLink';

const NavBar = () => {
    return (
        <nav className=' shadow'>
            <div className=' flex justify-between gap-4 items-center bg-white py-[8px] container mx-auto'>
                <img src={logoImg} alt="" className=' w-[50px]' />
                <ul className=' flex justify-between gap-3 items-center'>
                    <li>
                        <MyNavLink to={"/"}>Home</MyNavLink>
                    </li>

                    <li>
                       <MyNavLink to={"/apps"}>Apps</MyNavLink>
                    </li>

                    <li>
                       <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
                    </li>

                </ul>

                <button className="btn bg-purple-500 text-white"> <FaGithub />Contribute</button>

            </div>
        </nav>
    );
};

export default NavBar;