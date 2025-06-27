import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/sampleData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
	const [products, setProducts] = useState(sampleProducts);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
				.then((res) => {
					console.log(res.data);
					setProducts(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					toast.error("Failed to fetch products");
					setIsLoading(false);
				});
		}
	}, [isLoading]);

	function deleteProduct(productId) {
		const token = localStorage.getItem("token");
		if (!token) {
			toast.error("Please login first");
			return;
		}
		axios
			.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then(() => {
				toast.success("Product deleted successfully");
				setIsLoading(true); // Refresh list
			})
			.catch((e) => {
				toast.error(e.response?.data?.message || "Error deleting product");
			});
	}

	return (
		<div className="w-full h-full overflow-y-auto bg-blue-100 text-blue-800 relative p-6">
			<h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
				Admin Products
			</h1>

			<Link
				to="/admin/add-product"
				className="absolute text-2xl bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center w-14 h-14 shadow-lg transition duration-300"
			>
				+
			</Link>

			<div className="overflow-x-auto rounded-lg shadow-lg">
				{isLoading ? (
					<div className="w-full h-64 flex justify-center items-center">
						<div className="w-[70px] h-[70px] border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
					</div>
				) : (
					<table className="w-full text-center bg-blue-100 text-black rounded overflow-hidden">
						<thead className="bg-blue-200 text-blue-900 text-md">
							<tr>
								<th className="py-3">Product ID</th>
								<th>Name</th>
								<th>Image</th>
								<th>Labelled Price</th>
								<th>Price</th>
								<th>Stock</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{products.map((item, index) => (
								<tr
									key={index}
									className="border-t hover:bg-blue-300 transition duration-200"
								>
									<td className="py-2">{item.productId}</td>
									<td>{item.name}</td>
									<td>
										<img
											src={item.images[0]}
											alt={item.name}
											className="w-[50px] h-[50px] mx-auto rounded shadow"
										/>
									</td>
									<td>{item.labelledPrice}</td>
									<td>{item.price}</td>
									<td>{item.stock}</td>
									<td>
										<div className="flex justify-center items-center w-full">
											<FaTrash
												onClick={() => deleteProduct(item.productId)}
												className="text-[20px] text-red-500 mx-2 cursor-pointer"
											/>
											<FaEdit
												onClick={() =>
													navigate("/admin/edit-product", {
														state: item,
													})
												}
												className="text-[20px] text-blue-500 mx-2 cursor-pointer"
											/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}
