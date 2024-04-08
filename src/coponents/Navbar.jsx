import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/FirebaseAuthProvider";


const Navbar = () => {
    const { logout,user } = useContext(AuthContext);


    const navLinks = <div className="flex gap-5 font-medium text-lg">
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/update-profile'}>Update Profile</NavLink>
    <NavLink to={'/profile'}>User Profile</NavLink>
    </div>

    const userLogout = () => {
        logout()
            .then(() => {
            console.log('log out successfully');
            })
            .catch(() => {
            console.log('error');
        })
    }
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        
                    </div>
                </div>
                <a className="btn btn-ghost text-xl">[Website Name]</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-1">
                   
                    {navLinks}
                </div>
            </div>
            <div className="navbar-end ">
               
                {
                    user ? <>
                        <a onClick={userLogout} className="btn mr-5 font-medium text-xl btn-accent">Logout</a>
                        <img className="w-14 rounded-full" title={user?.displayName} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </> : <Link to={'/login'} className="btn mr-5 font-medium text-xl btn-accent">Login</Link>
               }
            </div>
            
        </div>
    );
};

export default Navbar;