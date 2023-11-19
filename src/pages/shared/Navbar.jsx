import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user,logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    logOut()
    .then((result)=>{
        console.log(result);
        Swal.fire({
          title: "Good job!",
          text: `Successfully log Out,${user.displayName}`,
          icon: "success"
        });
        navigate('/login');
    })
  }

  const item = (
    <>
      <li className="text-base font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-semibold">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li tabIndex={0} className="text-base font-semibold">
        <details>
          <summary>Category</summary>
          <ul className="p-2 w-48 text-black">
            <li>
              <a>Home Made Food</a>
            </li>
            <li>
              <a>Pickles</a>
            </li>
            <li>
              <a>Crochet Product</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="text-base font-semibold">
        <a>Cart</a>
      </li>
      <li className="text-base font-semibold">
        <a>DashBoard</a>
      </li>
    </>
  );
  return (
   <div>
       <div className="navbar bg-black z-10 text-white bg-opacity-50 fixed max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {item}
          </ul>
        </div>
        <a className=" text-base btn btn-ghost md:text-2xl font-serif text-cyan-600">
          Sweet <br className="-mt-1" />
          <FaHome className="text-emerald-400" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{item}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="avatar online">
              <div className="w-8 md:w-12 rounded-full">
                <img src={user?.photoURL}/>
              </div>
            </div>
            <h1 className="ml-1 font-semibold ">{user.displayName}</h1>
            <h1 className="btn bg-emerald-400 ml-2 text-base font-semibold" onClick={handleLogOut}>LogOut</h1>
            
          </div>
        ) : (
          <NavLink to="/login">LogIn</NavLink>
        )}
      </div>
    </div>
   </div>
  );
};

export default Navbar;
