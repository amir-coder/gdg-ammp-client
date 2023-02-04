import Head from "next/head";
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Image from "next/image";
import GDGlogo from "public/GDG_Algiers_White.png"
import WTMlogo from "public/WTM_Algiers_White.png"


const LogIn = () => {
    return (   
    <div className="min-h-screen bg-loginbackgrouned">
        {/*LOGO*/}
        <div className="pt-10 items-center gap-48 flex justify-center ">  
            <div className=" w-72 h-20">
                <Image src={GDGlogo}/>
            </div>
            <div className=" w-72 h-20">
                <Image src={WTMlogo}/>
            </div>
        </div>
        {/*The FORM*/}
        <div className="flex felx-col items-center justify-center">  
            <Head>
                <title>LogIn</title>
            </Head>      
            <main className="flex felx-col items-center justify-center w-full flex-1 px-20 pt-10 text-center">
                <div className="bg-white rounded-xl w-1/2 p-4">
                    <div className="py-5 text-3xl font-bold text-center mb-4"> {/*Sign In text*/}
                        <h2>Sign In</h2>
                    </div>
                    <div className="flex flex-col text-center items-center mb-5">{/*EMAIL FILED */}
                        <div className="bg-gray-100 w-3/5 p-4 rounded-xl flex items-center">
                            <FaRegEnvelope className="w-10 mr-2"/>
                            <input type="eamil" name="email" placeholder="Email" className="bg-gray-100 flex-1 outline-none text-sm-bold" ></input>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center mb-7">{/*PASSWORD FILED */}
                        <div className="bg-gray-100 w-3/5 p-4 rounded-xl flex items-center">
                            <MdLockOutline className="w-10 mr-2"/>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 flex-1 outline-none text-sm-bold" ></input>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/5 mb-10 ml-32">{/*REMEBER ME AND FORGOT PASSWORD FILED*/}
                        <label className="flex items-center text-base"><input type="checkbox" name="remember" className="mr-1"/>Remember Me</label>
                        <a href="/">Forgot Password ?</a>
                    </div>
                    {/*Sign In Button*/}
                    <div className="mb-5">
                        <a href="/" className="border-2 rounded-3xl px-24 py-2 inlineblock font-semibold hover:bg-white hover:text-black bg-blue-500 text-white w-3/5">Sign In</a>
                    </div>
                </div>
            </main>
        </div>
    </div>
     );
}
 
export default LogIn;