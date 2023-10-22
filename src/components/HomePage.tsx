import { Button } from "antd";
import { SearchOutlined, LogoutOutlined } from "@ant-design/icons";
import { auth, signInWithGoogle } from "../fireabse_setup/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../fireabse_setup/AuthContext";

function HomePage() {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	return (
		<div>
			<div style={{ fontWeight: "bold", fontSize: "32px" }}>HOME PAGE</div>
			<div>
				<Button
					type="primary"
					icon={currentUser ? <LogoutOutlined /> : <SearchOutlined />}
					onClick={() => {
						if (currentUser) {
							auth.signOut();
						} else {
							signInWithGoogle().then(() => {
								if (currentUser !== null) {
									navigate("/events");
								}
							});
						}
					}}>
					{currentUser ? "LogOut" : "Sign In With Google"}
				</Button>
			</div>
		</div>
	);
}

export default HomePage;
