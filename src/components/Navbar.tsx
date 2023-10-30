import {useState} from "react";
import "../styles/Navbar.css";

export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const [isMovileNavOpen, setIsMovileNavOpen] = useState(true);

	return (
		<nav className="navigation">
			<a href="/" className="brand-name">
				Invertis University
			</a>
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}>
				{/* icon from heroicons.com */}
				{isNavExpanded ? (
					<svg viewBox="0 0 40 40">
						<path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="white">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				)}
			</button>
			<div
				className={
					isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
				}>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/mytickets">My Tickets</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
