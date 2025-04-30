import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <div className="bg-amber-400 h-[500px]">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {/* <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="https://www.google.com">Google</a> */}
                {/* <h1 className="bg-blue-400 text-4xl text-blue-900 font-bold">Aiken Digital Computer Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, 
                    ratione impedit architecto ea consequuntur temporibus eveniet vel perferendis quae nemo?
                </p> */}
                {/* <UserData></UserData> */}
            </div>
        </>
    )
}