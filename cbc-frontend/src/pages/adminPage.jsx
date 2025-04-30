import { Link ,Route,Routes} from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex bg-amber-200">
            <div className="h-full w-[300px] flex flex-col bg-blue-600 text-white">
                <Link to="/admin/products" className="p-4 hover:bg-blue-700">Products</Link>
                <Link to="/admin/users" className="p-4 hover:bg-blue-700">Users</Link>
                <Link to="/admin/orders" className="p-4 hover:bg-blue-700">Orders</Link>
                <Link to="/admin/reviews" className="p-4 hover:bg-blue-700">Reviews</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] bg-blue-200 p-4">
                <Routes path="/*">
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
        </div>
    );
}
