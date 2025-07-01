import { Link, useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	console.log("Header component loading....");

	return (
		<header className="w-full h-[80px] shadow-2xl bg-white flex items-center px-4">
			{/* Logo Section */}
			<div className="w-[80px] h-[80px] flex items-center justify-center">
				<img
					onClick={() => navigate("/")}
					src="/logo.png"
					alt="Logo"
					className="w-[60px] h-[60px] object-cover cursor-pointer"
				/>
			</div>

			{/* Navigation Links */}
			<div className="flex-1 h-full flex justify-center items-center space-x-6">
				<Link to="/" className="text-[18px] font-semibold text-blue-800 hover:underline">
					Home
				</Link>
				<Link to="/products" className="text-[18px] font-semibold text-blue-800 hover:underline">
					Product
				</Link>
				<Link to="/about" className="text-[18px] font-semibold text-blue-800 hover:underline">
					About
				</Link>
				<Link to="/contact" className="text-[18px] font-semibold text-blue-800 hover:underline">
					Contact
				</Link>
			</div>

			{/* Right Section (e.g. profile, cart) */}
			<div className="w-[80px] h-full flex items-center justify-end">
				{/* Add buttons/icons here later */}
			</div>
		</header>
	);
}
