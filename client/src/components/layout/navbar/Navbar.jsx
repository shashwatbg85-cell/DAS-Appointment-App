import React from 'react'
import Topbar from './Topbar';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router';
import Logo from '../../../assets/screenshot 2026-03-21 150227.png';

const Navbar = () => {
  return (
    <>
        <div className="navbar-contianer">
            <div className="row">
                <div className="col-md-3">
                    <NavLink to="/">
                      <img src={Logo} alt="logo" className='brand-logo'/>
                    </NavLink>
                </div>
                <div className="col-md-9">
                    {/*topbar menu*/}
                    <div>
                        <Topbar/>
                    </div>
                      {/*main menu*/}
                    <div>
                        <NavMenu/>
                    </div>
                </div>
            </div>         
        </div>
    </>
  );
};

export default Navbar;