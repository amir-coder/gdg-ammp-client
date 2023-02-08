import Head from "next/head";
import { MdLockOutline } from 'react-icons/md';
import Weird_thing from "public/Vector.png"
import Image from "next/image";
const passreset = () => {
    return ( 
    <div className="min-h-screen bg-loginbackgrouned">
        <div className="flex felx-col items-center justify-center">  
            <Head>
                <title>Reset Password</title>
            </Head>      
            <div className="right-[0] fixed z-0">
                <Image className="w-[52vw] h-[75vh]" src={Weird_thing} />
            </div>
            <main className="flex felx-col items-center justify-center w-full flex-1 px-20 pt-36 text-center">
                <div className="bg-white rounded-xl w-1/2 p-4 z-30">
                    <div className="py-5 text-3xl font-bold text-center mb-4"> {/*Sign In text*/}
                        <h2>Change password</h2>
                    </div>
                    <div className="flex flex-col text-center items-center mb-7">{/*PASSWORD FILED */}
                        <div className="bg-gray-100 w-3/5 p-4 rounded-xl flex items-center">
                            <MdLockOutline className="w-10 mr-2"/>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 flex-1 outline-none text-sm-bold" ></input>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center mb-7">{/*PASSWORD FILED */}
                        <div className="bg-gray-100 w-3/5 p-4 rounded-xl flex items-center">
                            <MdLockOutline className="w-10 mr-2"/>
                            <input type="password" name="password" placeholder="Confirm passowrd" className="bg-gray-100 flex-1 outline-none text-sm-bold" ></input>
                        </div>
                    </div>
                    {/*Reset Button*/}
                    <div className="mb-5">
                        <a href="/login" className="border-2 rounded-3xl px-24 py-2 inlineblock font-semibold hover:bg-white hover:text-black bg-blue-500 text-white w-3/5">Change Password</a>
                    </div>
                </div>
            </main>
            <div className="ellipse_signin_1"></div>
            <div className="ellipse_signin_2"></div>
        </div>
    </div>
    );
}
 
export default passreset;