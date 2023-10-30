// import {LoginOutlined} from "@ant-design/icons";
import {signInWithGoogle} from "../fireabse_setup/firebase";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import "../styles/HomePage.css";
import {Button, Flex, Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Navbar from "./Navbar";
import Ticket from "./Ticket";

function HomePage() {
	const navigate = useNavigate();
	const {currentUser} = useAuth();

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
		<Layout className="layout-home">
			<Header>
				{/* <p style={{color: "white"}}>Navbar</p> */}
				<Navbar/>
			</Header>
			<div className="overlay">
				<Content className="content-home">
					<Flex
						className="content-wrapper"
						vertical
						align="center"
						justify="center">
						<p className="invertis">Invertis Univertsity</p>
						<p className="subtitle">Auditorium Booking</p>
						<Button
							icon
							type="primary"
							className="login-btn-home"
							onClick={() => {
								handleButtonClick();
							}}>
							{currentUser ? "See Live Events" : "Sign In With Google"}
						</Button>
						
					</Flex>
				</Content>
			</div>
			{/* <Footer>Footer</Footer> */}
		</Layout>
	);
}

export default HomePage;
