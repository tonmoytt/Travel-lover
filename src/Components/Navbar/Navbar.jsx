import { Link, NavLink } from "react-router-dom";
import img from './../../assets/images/icons/logo.png'
import { BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
    const navlink = <>
        <li className="text-xl font-serif ml-4 md:ml-20 lg:ml-40"><NavLink to="/">News</NavLink> </li>
        <li className="text-xl font-serif  ml-4"><NavLink to="/destination">Destination</NavLink> </li>
        <li className="text-xl font-serif ml-4"><NavLink to="/blog">Blog</NavLink> </li>
        <li className="text-xl font-serif ml-4"><NavLink to="/contact">Contact</NavLink> </li>



    </>


    return (
        <div className="bg-cyan-100">



            <div className="navbar bg-cyan-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navlink
                            }
                        </ul>
                    </div>
                    <img className="h-14 w-36" src={img} alt="" />



                    <input className="input relative  input-bordered ml-20  px-4 py-2 rounded-md bg-slate-100" type="text" name="text" placeholder="search your destination" />
                    {
                        <BiSearchAlt2 className="absolute ml-10"></BiSearchAlt2>

                    }



                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn btn-warning text-lg px-8">Login</button></Link>
                </div>
            </div>


        </div>
    );
};

export default Navbar;