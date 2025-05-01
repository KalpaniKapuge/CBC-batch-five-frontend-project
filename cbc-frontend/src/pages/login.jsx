import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleLogin(){
        console.log(email)
        console.log(password)
        try{
            const response = await axios.post("http://localhost:5000/api/users/login" , {
                email : email,
                password : password
            })
            //alert("Login successfull")
            toast.success("Login Successful")
            console.log(response.data)
            
        }catch(e){
            toast.error(e.response.data.message)
        }


    }

    return (
        <div className="w-full h-screen flex  justify-evenly items-center bg-[url('/login.jpg')] bg-center bg-cover">
            <div className="w-[50%] h-full ">

            </div>

            <div className="w-[50%] h-full flex justify-center items-center ">

                 <div className="w-[500px] h-[600px] backdrop-blur-lg bg-white/20 rounded-[20px] shadow-2xl flex flex-col justify-center items-center space-y-6 p-6">

            <input 
                onChange={(e) => {
                    // console.log(e)
                    setEmail(e.target.value)
                }}

                value={email}

                placeholder="Email"
                className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />

            <input onChange={(e) => {
                setPassword(e.target.value)
            }} 

            value={password}

                type="password"
                placeholder="Password"
                className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />

            <button onClick={handleLogin}
                className="cursor-pointer w-[300px] h-[50px] text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-[20px] shadow-md hover:from-red-500 hover:to-pink-500 transition"
            >
                Login
            </button>

            </div>

            </div>
        </div>
    );
}
