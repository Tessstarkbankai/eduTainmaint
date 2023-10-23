import { auth } from "../fireabse_setup/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../fireabse_setup/AuthContext";
import { useEffect } from "react";
import { Button, Flex, QRCode } from "antd";
import "../styles/GenerateTicketPage.css";
import { toPng } from "html-to-image";

function GenerateTicketPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const { currentUser } = useAuth();

	useEffect(() => {
		if (auth.currentUser === null) {
			navigate("/");
		}
		if (!location.state) navigate("/events");
	}, []);

	const download = (dataurl: string, filename: string) => {
		const link = document.createElement("a");
		link.href = dataurl;
		link.download = filename;
		link.click();
	};

	const downloadTicket = () => {
		let node = document.getElementById("ticket-wrapper") as HTMLElement;

		toPng(node).then((dataURL) => {
			download(
				dataURL,
				`ticket_${location.state.eventTitle}_${location.state.seatNumber}`
			);
		});
	};

	return (
		<>
			<Flex
				vertical={true}
				align="center"
				justify="center"
				style={{ height: "100vh" }}>
				<Flex
					vertical={true}
					align="center"
					justify="center"
					id="ticket-wrapper">
					<p className="ticket-event-name">{location.state.eventTitle}</p>
					<Flex vertical={false} align="center" justify="center" gap="large">
						<QRCode
							size={120}
							value={`{eventID: ${location.state.eventID}, seatNumber: ${location.state.seatNumber}}`}
						/>
						<p className="ticket-seat-number">{location.state.seatNumber}</p>
					</Flex>
					<Flex vertical={true} align="center" justify="center">
						<p className="ticket-data">
							Student Name: {location.state.studentName}
						</p>
						<p className="ticket-data">
							Student ID: {location.state.studentID}
						</p>
					</Flex>
				</Flex>
				<Button
					type="primary"
					onClick={() => {
						downloadTicket();
					}}>
					Download Ticket
				</Button>
			</Flex>
		</>
	);
}

export default GenerateTicketPage;
