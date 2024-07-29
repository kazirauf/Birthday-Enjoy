import { NavLink } from "react-router-dom";
import logo from "../../../assets/images-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../../../Prividers/AuthProvider";
const Navbar = () => {
  const {user, logOut } = useContext(AuthContext)
    const links = <>
    <li className="text-slate-900 text-lg font-bold"><NavLink style={({ isActive}) => {
  return {
    fontWeight: isActive ? "bold" : "",
    backgroundColor: isActive ? "white" : "",
    color: isActive ? "#88d4f2" : "",
    
     
  };
}}  to="/">Home</NavLink></li>
    <li className="text-slate-900 text-lg font-bold"><NavLink  style={({ isActive}) => {
  return {
    fontWeight: isActive ? "bold" : "",
    backgroundColor: isActive ? "white" : "",
    color: isActive ? "#88d4f2" : "",

     
  };
}} to="/birthdaydesign">Birthday Design</NavLink></li>
    <li className="text-slate-900 text-lg font-bold"><NavLink  style={({ isActive}) => {
  return {
    fontWeight: isActive ? "bold" : "",
    backgroundColor: isActive ? "white" : "",
    color: isActive ? "#88d4f2" : "",
    
     
  };
}} to="/contact">Contact Us</NavLink></li>
  </>

  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
    return (
        <div>
            <div className="navbar bg-base-100  mb-0 pb-0 lg:w-full md:w-full w-[500px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {links}
      </ul>
    </div>
   <img className="w-24" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">

    {
      user ? 
     <div className="flex items-center gap-3 mr-3">
      <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
      <h1>{user?.displayName}</h1>
     </div>
      : 
      <img className="w-12 rounded-full mr-3" src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="" />
    }
  {
                    user ?
                        <button onClick={handleLogOut} className="btn text-white bg-orange-400">Sign Out</button>
                        :
                        <NavLink  className=" font-bold btn bg-[#feb9cc] text-white" style={({ isActive}) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            
                            backgroundColor: isActive ? "#88d4f2" : "",
                            
                             
                          };
                        }}  to="/login">Login</NavLink>
                }
  
  </div>
</div>
        </div>
    );
};

export default Navbar;