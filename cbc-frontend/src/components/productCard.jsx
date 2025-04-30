export default function ProductCard(props) {
    return (
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
        <img src={props.picture} alt={props.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">{props.name}</h1>
          <p className="text-gray-600 text-sm mt-2">{props.description}</p>
          <h2 className="text-lg text-green-700 font-semibold mt-3">Price: {props.price}</h2>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add To Cart</button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  