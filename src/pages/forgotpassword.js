import Head from "next/head";
import { FaRegEnvelope } from 'react-icons/fa';
import Image from "next/image";
import Weird_thing from "public/Vector.png"

const forgotPassword = () => {
    return ( 
    <div className="min-h-screen bg-loginbackgrouned">
        <Head>
            <title>Forgot Password</title>
        </Head> 
        <div className="right-[0] fixed z-[0]">
            <Image className="w-[52vw] h-[75vh]" src={Weird_thing} />
        </div>
        <main className="flex felx-col items-center justify-center w-full flex-1 px-20 pt-10">
                <div className="bg-white rounded-xl w-5/12 p-4 mt-16 z-20">
                    <div className="py-5 text-3xl font-bold text-center mb-4"> {/*Forgot password text*/}
                        <h2>Reset your password</h2>
                    </div>
                    <div className="text-base font-bold  mb-10"> {/*Forgot password text*/}
                        <h2>Enter your user account's email address in order to recieve the password reset link</h2>
                    </div>
                    <div className="flex flex-col text-center items-center mb-5 mt-5">{/*EMAIL FILED */}
                        <div className="bg-gray-100 w-3/5 p-4 rounded-xl flex items-center">
                            <FaRegEnvelope className="w-10 mr-2"/>
                            <input type="eamil" name="email" placeholder="Email" className="bg-gray-100 flex-1 outline-none text-sm-bold" ></input>
                        </div>
                    </div>
                    {/*Send email Button*/}
                    <div className="mb-10 mt-16 text-center">
                        <a href="/mailsent" className="border-2 rounded-3xl px-24 py-2 inlineblock font-semibold hover:bg-white hover:text-black bg-blue-500 text-white w-3/5">Send Password Reset Email</a>
                    </div>
                </div>
            </main>
            <div className="ellipse_signin_1"></div>
            <div className="ellipse_signin_2"></div>
    </div> 
    );
}
 
export default forgotPassword;