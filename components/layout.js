import React from "react";
import Link from 'next/link';
import {
    MdOutlineSpaceDashboard,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
    MdSupervisedUserCircle,
    MdEvent
} from "react-icons/md";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Image from "next/image";

function Layout({ children }) {
    return (
        <div>
            <aside>
                <nav>
                    <div className="p-6 w-1/2 h-screen bg-GrayF z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                        <div className="flex flex-col justify-start item-center">
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    src="/../public/images/gdg_algiers.png"
                                    alt="gdg algiers"
                                    width={160}
                                    height={10}
                                    priority
                                />

                                <Image className="p-2 w-1/2"
                                    src="/../public/images/wtm.png"
                                    alt="Wm"
                                    width={100}
                                    height={10}
                                    priority
                                />
                            </div>
                            <div className=" my-4 border-b border-BorderColor pb-4">
                                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineSpaceDashboard className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        <Link href="/">
                                            Overview
                                        </Link>
                                    </h3>
                                </div>
                                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdSupervisedUserCircle className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        <Link href='/Members'>
                                            Members
                                        </Link>
                                    </h3>
                                </div>
                                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdEvent className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        <Link href='/Events'>
                                            Events
                                        </Link>
                                    </h3>
                                </div>
                                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <AiOutlineFundProjectionScreen className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        <Link href='/Projects'>
                                            Projects
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                            {/* setting  */}
                            <div className=" my-4 border-b border-BorderColor pb-4">
                                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineSettings className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        Settings
                                    </h3>
                                </div>
                                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-GrayC p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineMoreHoriz className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        More
                                    </h3>
                                </div>
                            </div>
                            {/* logout */}
                            <div className=" my-4">
                                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-transparent p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                    <MdOutlineLogout className="text-2xl text-colortext group-hover:text-hovertext " />
                                    <h3 className="text-base text-colortext group-hover:text-hovertext font-semibold ">
                                        
                                    <Link href='/login'>
                                            Logout
                                    </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside >
            <main className='flex-1'>{children}</main>
        </div >
    );
}

export default Layout;


