import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import {Timestamp} from "@firebase/firestore";
import {useEffect} from "react";
import {Button, Flex, QRCode} from "antd";
import "../styles/GenerateTicketPage.css";
import {toPng} from "html-to-image";
import Ticket from "./Ticket";

function GenerateTicketPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const {currentUser} = useAuth();

	useEffect(() => {
		if (currentUser === null) {
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

	const timeStamp = new Timestamp(
		location.state.eventDate._seconds,
		location.state.eventDate._nanoseconds
	);
	const eventDate = timeStamp.toDate();

	return (
		<>
			<Flex
				vertical={true}
				align="center"
				justify="center"
				style={{height: "100vh"}}>
				<Flex
					vertical={true}
					align="center"
					justify="center"
					id="ticket-wrapper">
					<Ticket
						seat={location.state.seatNumber}
						ticketTitle="Invertis University"
						eventName={location.state.eventTitle}
						studentName={location.state.studentName}
						studentID={location.state.studentID}
						course={location.state.studentCourse}
						eventDate={`${eventDate.getDate()} \\ ${eventDate.getMonth()} \\ ${eventDate.getFullYear()}`}
						qrCode={
							<QRCode
								size={150}
								value={`${location.state.eventID}%::%${location.state.seatNumber}`}
							/>
						}
					/>
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
