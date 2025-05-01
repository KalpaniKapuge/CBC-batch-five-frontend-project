import { useState } from "react";

export default function TestingPage(){
    
    //hooks-rule 1  - Top of the component function (udinm daganna oni hooks)
    //hooks-rule-2  - uda idn plleht thiyena hooks piliwelt run wenna oni
    //Types of hooks
    //useState
    //useEffect
    //useParam
    //useLocation
    //useNavigation
    //const [a,b] = useState(0)
    //a-variable
    //b-function
    const [count,setCount] = useState(0)
    const [status,setStatus] = useState("passed")
    

    return(
        <div className="w-full h-screen  flex justify-center items-center">
            <div className="w-[450px] h-[250px] shadow-2xl flex justify-center items-center bg-blue-300">
                <button   onClick = {
                    () => {
                        setCount(count-1)
                    } 
                }className="bg-blue-600 text-white font-bold text-center text-[20px] w-[100px] h-[40px] cursor-pointer">
                -
                </button>
                <span className="text-[40px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex justify-center items-center">
                    {count}
                </span>
                <button onClick = {
                    () => {
                        setCount(count+1)
                    }
                }className="bg-blue-600  text-white font-bold text-center text-[20px] w-[100px] h-[40px] cursor-pointer">
                +
                </button>
            </div>

            <div className="w-[450px] h-[250px] shadow flex-col flex justify-center items-center  bg-amber-300">
                <span className="text-[40px] text-center w-[100px] h-[40px] flex justify-center items-center font-bold ">{status}</span>
                <button onClick = {
                    () => {
                        setStatus("Passed")
                    }
                }className="bg-green-700 m-[20px] px-[20px] py-[10px] text-2xl text-white font-bold" >Passed</button>
                <button onClick = {
                    () => {
                        setStatus("Failed")
                    }
                }className="bg-green-700 m-[20px] px-[20px] py-[10px] text-2xl text-white font-bold">Failed</button>
            </div>
        </div>
    )
}