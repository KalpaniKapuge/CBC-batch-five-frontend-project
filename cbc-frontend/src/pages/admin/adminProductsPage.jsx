import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/sampleData";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
	const [products, setProducts] = useState(sampleProducts);

	useEffect(() => {
		axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div className="w-full h-full overflow-y-auto bg-blue-100 text-blue-800 relative p-6">
			<h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Admin Products</h1>

			<Link
				to="/admin/add-product"
				className="absolute text-2xl bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center w-14 h-14 shadow-lg transition duration-300"
			>
				+
			</Link>

			<div className="overflow-x-auto rounded-lg shadow-lg">
				<table className="w-full text-center bg-blue-100 text-black rounded overflow-hidden">
					<thead className="bg-blue-200 text-blue-900 text-md">
						<tr>
							<th className="py-3">Product ID</th>
							<th>Name</th>
							<th>Image</th>
							<th>Labelled Price</th>
							<th>Price</th>
							<th>Stock</th>
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
										className="w-[50px] h-[50px] mx-auto rounded shadow"
									/>
								</td>
								<td>{item.labelledPrice}</td>
								<td>{item.price}</td>
								<td>{item.stock}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
