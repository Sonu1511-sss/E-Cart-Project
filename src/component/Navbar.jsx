import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch , getCountCart } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-semibold">
      <h1 className="font-bold text-purple-600 text-2xl cursor-pointer">
        <a href="/">
          <span className="text-indigo-500">E-</span>Cart
        </a>
      </h1>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p className="hover:text-indigo-500">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/Collection"}
          className={"flex flex-col items-center gap-1"}
        >
          <p className="hover:text-indigo-500">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/About"} className={"flex flex-col items-center gap-1"}>
          <p className="hover:text-indigo-500">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/Contact"} className={"flex flex-col items-center gap-1"}>
          <p className="hover:text-indigo-500">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <BiSearch onClick={()=>setShowSearch(true)}  className="text-2xl font-bold cursor-pointer" />
        <div className="group relative">
          <Link to={'/login'}><CgProfile className="text-2xl font-bold cursor-pointer" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/Cart"} className="relative">
          <IoBagOutline className="text-2xl font-bold cursor-pointer" />
          <p className="absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCountCart()}
          </p>
        </Link>
        <MdMenu
          onClick={() => setVisible(true)}
          className="text-2xl font-bold cursor-pointer sm:hidden"
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <RiArrowDropLeftLine className="text-2xl font-bold rotate-180" />
            <p className="hover:text-indigo-500 ">Back</p>
          </div>
          <NavLink
            to={"/"}
            onClick={() => setVisible(false)}
            className={
              "flex flex-col items-center gap-1 p-3 hover:bg-black hover:text-gray-200"
            }
          >
            <p className="hover:text-indigo-500 ">HOME</p>
          </NavLink>
          <NavLink
            to={"/Collection"}
            onClick={() => setVisible(false)}
            className={
              "flex flex-col items-center gap-1 p-3 hover:bg-black hover:text-gray-200"
            }
          >
            <p className="hover:text-indigo-500">COLLECTION</p>
          </NavLink>
          <NavLink
            to={"/About"}
            onClick={() => setVisible(false)}
            className={
              "flex flex-col items-center gap-1 p-3 hover:bg-black hover:text-gray-200"
            }
          >
            <p className="hover:text-indigo-500">ABOUT</p>
          </NavLink>
          <NavLink
            to={"/Contact"}
            onClick={() => setVisible(false)}
            className={
              "flex flex-col items-center gap-1 p-3 hover:bg-black hover:text-gray-200"
            }
          >
            <p className="hover:text-indigo-500">CONTACT</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
