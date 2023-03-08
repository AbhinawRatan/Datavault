import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineShareAlt, AiOutlineHome } from "react-icons/ai";
import { FiFolder, FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Display.css";

const YourAccount = ({contract, account }) => {
  const menus = [
    {name: "Home", link: "/", icon: AiOutlineHome },
    {name: "Your Account", link: "/YourAccount", icon: AiOutlineUser, margin: true },
    {name: "Upload", link: "/Upload", icon: FiUpload, margin: true },
    {name: "File Manager", link: "/FileManager", icon: FiFolder, margin: true },
    {name: "Shared", link: "/Shared", icon: AiOutlineShareAlt, margin: true },
  ];



  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  }
  return (
    <section className="flex gap-6">
      <div
        className={`bg-black-gradient min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold w-full flex-2">
        <span className="text-gradient font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
          Your Account
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full" />
        </span>{" "}
        <h4 className="text-black text-right -y-10">Hey There!</h4>
        <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
      </>
      </div>
    </section>
    
  );
};

export default YourAccount;