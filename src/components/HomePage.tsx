import { LoginOutlined } from "@ant-design/icons";
import { signInWithGoogle } from "../fireabse_setup/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../fireabse_setup/AuthContext";
import "../styles/HomePage.css";

function HomePage() {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	const handleButtonClick = () => {
		if (currentUser) {
			navigate("/events");
		} else {
			signInWithGoogle().then(() => {
				if (currentUser !== null) {
					navigate("/events");
				}
			});
		}
	};

	return (
		// <div>
		// 	<div style={{ fontWeight: "bold", fontSize: "32px" }}>HOME PAGE</div>
		// 	<div>
		// 		<Button
		// 			type="primary"
		// 			icon={currentUser ? <LogoutOutlined /> : <SearchOutlined />}
		// 			onClick={() => {
		// 				if (currentUser) {
		// 					auth.signOut();
		// 				} else {
		// 					signInWithGoogle().then(() => {
		// 						if (currentUser !== null) {
		// 							navigate("/events");
		// 						}
		// 					});
		// 				}
		// 			}}>
		// 			{currentUser ? "LogOut" : "Sign In With Google"}
		// 		</Button>
		// 	</div>
		// </div>

		<div id="home">
			<div className="overlay">
				<div className="invertis">Invertis University</div>
				<div className="subtitle">Auditorium Booking</div>

				<button
					type="button"
					className="home-button"
					onClick={() => {
						handleButtonClick();
					}}>
					<span className="home-button-icon">
						<LoginOutlined />
					</span>
					<span className="home-button-text">
						<span>
							{currentUser ? "See Live Events" : "Sign In With Google"}
						</span>
					</span>
				</button>
			</div>
		</div>
	);
}

export default HomePage;
