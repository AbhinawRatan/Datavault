import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineShareAlt, AiOutlineHome } from "react-icons/ai";
import { FiFolder, FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import FileUpload from "../componets/FileUpload";
import Upload from "../../../artifacts/contracts/Upload.sol/Upload.json";
import { ethers } from "ethers";

const DashboardMain = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [files, setFiles] = useState([{ name: "myFile.pdf" }]);

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        window.ethereum.autoRefreshOnNetworkChange = false;
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        let contractAddress = "0x3078157fec210C5BAb87031205FDA3877C150C1f";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract)
        setContract(contract);
      } else {
        console.error("Metamask is not installed");
      }
    };

    loadProvider();
  }, []);

  const menus = [
    { path: "/", name: "Home", link: "/", icon: AiOutlineHome },
    {
      path: "/YourAccount",
      name: "Your Account",
      link: "/",
      icon: AiOutlineUser,
      margin: true,
    },
    { path: "/Upload", name: "Upload", link: "/", icon: FiUpload, margin: true },
    {
      path: "/FileUpload",
      name: "File Manager",
      link: "/",
      icon: FiFolder,
      margin: true,
    },
    { path: "/Shared", name: "Shared", link: "/", icon: AiOutlineShareAlt, margin: true },
  ];

  const [open, setOpen] = useState(true);

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
          Upload
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full blue__gradient bottom-70" />
        </span>{" "}
        <h4 className="text-black text-right -y-10">Hey There!</h4>
        <div>
          <p className="title">Upload File</p>
          <FileUpload files={files} setFiles={setFiles} />
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;