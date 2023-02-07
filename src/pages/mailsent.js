import Head from "next/head";
import Weird_thing from "public/Vector.png"
import Image from "next/image";

const gobacktosignin = () => {
    return (  
    <div className="min-h-screen bg-loginbackgrouned">
        <Head>
            <title>Forgot Password</title>
        </Head> 
        <div className="right-[0] fixed z-0">
            <Image className="w-[52vw] h-[75vh]" src={Weird_thing} />
        </div>
        <main className="flex felx-col items-center justify-center w-full flex-1 px-20 pt-28">
                <div className="bg-white rounded-xl w-4/12 p-4 mt-16">
                    <div className="py-5 text-3xl font-bold text-center mb-4"> {/*Forgot password text*/}
                        <h2>Reset your password</h2>
                    </div>
                    <div className="text-lg font-bold  mb-10"> {/*Forgot password text*/}
                        <h2>Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.</h2>
                    </div>
                    {/*Send email Button*/}
                    <div className="mb-10 mt-16 text-center">
                        <a href="/login" className="border-2 rounded-3xl px-24 py-2 inlineblock font-semibold hover:bg-white hover:text-black bg-blue-500 text-white w-3/5">Return to sign in</a>
                    </div>
                </div>
            </main>
            <div className="ellipse_signin_1"></div>
            <div className="ellipse_signin_2"></div>
    </div>
    );
}
 
export default gobacktosignin;