import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister() {
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users", {
                firstName,
                lastName,
                email,
                password
            });
            toast.success("Registration Successful");
            navigate("/login"); // Redirect to login page after success
        } catch (e) {
            toast.error(e.response?.data?.message || "Registration Failed");
        }
    }

    return (
        <div className="w-full h-screen flex justify-evenly items-center bg-[url('/login.jpg')] bg-center bg-cover">
            <div className="w-[50%] h-full"></div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[700px] backdrop-blur-lg bg-white/20 rounded-[20px] shadow-2xl flex flex-col justify-center items-center space-y-6 p-6">

                    <input 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    />

                    <input 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    />

                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    />

                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-[300px] h-[50px] px-4 text-lg border-2 border-pink-400 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-pink-500" 
                    />

                    <button 
                        onClick={handleRegister}
                        className="cursor-pointer w-[300px] h-[50px] text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-[20px] shadow-md hover:from-red-500 hover:to-pink-500 transition"
                    >
                        Register
                    </button>

                </div>
            </div>
        </div>
    );
}
