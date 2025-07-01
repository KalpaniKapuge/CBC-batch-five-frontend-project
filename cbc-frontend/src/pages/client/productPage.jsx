import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isLoading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
				.then((res) => {
					setProducts(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					console.error("Error fetching products:", err);
					setIsLoading(false);
				});
		}
	}, [isLoading]);

	return (
		<div className="w-full min-h-screen bg-blue-50 py-10 px-6">
			<h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Products</h1>

			{isLoading ? (
				<div className="flex justify-center items-center h-40">
					<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				</div>
			) : (
				<div className="flex flex-wrap justify-center gap-6">
					{products.map((product) => (
						<ProductCard key={product.productId} product={product} />
					))}
				</div>
			)}
		</div>
	);
}
