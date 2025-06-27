import { Link, Routes, Route } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductPage from "./admin/addProductPage";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex bg-amber-200">
            {/* Sidebar */}
            <div className="h-full w-[300px] flex flex-col bg-blue-600 text-white">
                <Link to="/admin/products" className="p-4 hover:bg-blue-700">Products</Link>
                <Link to="/admin/users" className="p-4 hover:bg-blue-700">Users</Link>
                <Link to="/admin/orders" className="p-4 hover:bg-blue-700">Orders</Link>
                <Link to="/admin/reviews" className="p-4 hover:bg-blue-700">Reviews</Link>
            </div>

            {/* Main content */}
            <div className="h-full w-[calc(100%-300px)] bg-white p-4 overflow-y-auto">
                <Routes>
                    <Route path="products" element={<AdminProductsPage />} />
                    <Route path="users" element={<h1>Users</h1>} />
                    <Route path="orders" element={<h1>Orders</h1>} />
                    <Route path="reviews" element={<h1>Reviews</h1>} />
                    <Route path="add-product" element={<AddProductPage />} />
                    <Route pathe="/edit-product" element={<h1>EditProductPage</h1>}/>
                </Routes>
            </div>
        </div>
    );
}
