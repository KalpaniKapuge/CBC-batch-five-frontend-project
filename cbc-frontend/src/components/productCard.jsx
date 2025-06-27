export default function ProductCard(props) {
  const product = props.product
  
   return (
		<div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 w-full max-w-sm">
			<img
				src={product.images[0]}
				alt={product.name}
				className="w-full h-48 object-cover rounded-md mb-4"
			/>
			<h2 className="text-xl font-semibold text-blue-900 mb-1">{product.name}</h2>
			<p className="text-gray-600 text-sm mb-2">{product.description.slice(0, 80)}...</p>
			<div className="flex justify-between items-center mb-2">
				<div>
					<p className="text-gray-500 line-through text-sm">Rs. {product.labelledPrice}</p>
					<p className="text-lg font-bold text-green-600">Rs. {product.price}</p>
				</div>
				<p
					className={`text-sm font-medium ${
						product.isAvailable && product.stock > 0
							? "text-green-500"
							: "text-red-500"
					}`}
				>
					{product.isAvailable && product.stock > 0 ? "In Stock" : "Out of Stock"}
				</p>
			</div>
			<button
				disabled={!product.isAvailable || product.stock === 0}
				className={`w-full py-2 mt-2 rounded-md font-semibold transition ${
					product.isAvailable && product.stock > 0
						? "bg-blue-600 hover:bg-blue-700 text-white"
						: "bg-gray-300 text-gray-600 cursor-not-allowed"
				}`}
			>
				{product.isAvailable && product.stock > 0 ? "Add to Cart" : "Unavailable"}
			</button>
		</div>
	);
  }
  