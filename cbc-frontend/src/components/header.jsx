import UserData from "../../../../CBC-batch-five-frontend/cbc-frontend/src/components/userData.jsx";

export default function Header(){
    return(
        <>
            <div>
                <h1 className="bg-blue-400 text-4xl text-blue-900 font-bold">Aiken Digital Computer Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, 
                    ratione impedit architecto ea consequuntur temporibus eveniet vel perferendis quae nemo?
                </p>
                <UserData></UserData>
            </div>
        </>
    )
}