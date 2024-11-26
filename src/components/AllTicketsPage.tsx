import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import {Timestamp} from "@firebase/firestore";
import {useEffect, useState} from "react";
import {Button, Flex, QRCode} from "antd";
import "../styles/AllTicketsPage.css";
import {toPng} from "html-to-image";
import NewTicket from "./NewTicket";
import {client} from "../axios";
import "html2pdf.js";
import Ticket from "./Ticket";

type EventTicket = {
	eventName: string;
	eventID: string;
	name: string;
	seatNo: string;
	studentCourse: string;
	studentID: string;
};

function AllTicketsPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const {currentUser} = useAuth();
	const [ticketsData, setTicketsData] = useState([]);

	let {eventID} = useParams();

	useEffect(() => {
		if (currentUser === null) {
			navigate("/");
		}

		if (eventID != undefined) {
			client
				.post(`/alltickets`, {
					eventID: eventID,
				})
				.then((res) => {
					if (res.status === 200) {
						setTicketsData(res.data);
						console.log(res.data);
					}
				});
		}
	}, []);

	// const download = (dataurl: string, filename: string) => {
	// 	const link = document.createElement("a");
	// 	link.href = dataurl;
	// 	link.download = filename;
	// 	link.click();
	// };

	// const downloadTicket = () => {
	// 	let node = document.getElementById("ticket-wrapper") as HTMLElement;

	// 	toPng(node).then((dataURL) => {
	// 		download(
	// 			dataURL,
	// 			`ticket_${location.state.eventTitle}_${location.state.seatNumber}`
	// 		);
	// 	});
	// };

	// const timeStamp = new Timestamp(
	// 	location.state.eventDate._seconds,
	// 	location.state.eventDate._nanoseconds
	// );
	// const eventDate = timeStamp.toDate();

	var tickets: Array<any> = [];
	ticketsData.forEach((ticket: EventTicket, i) => {
		tickets.push(
			<div className="generateall-ticket-wrapper">
				<NewTicket
					seat={ticket.seatNo}
					ticketTitle="Invertis University"
					eventName={ticket.eventName}
					studentName={ticket.name}
					studentID={ticket.studentID}
					course={ticket.studentCourse}
					eventDate={`7 / 11 / 2023`}
					qrCode={
						<QRCode
							size={130}
							// value={`${ticket.eventID}%::%${ticket.seatNo}`}
							value={"https://tedxinvertisuniversity.com/"}
							color="#000"
							bgColor="#FFF"
						/>
					}
				/>
			</div>
		);
	});

	// tickets.push(
	// 	<div className="generateall-ticket-wrapper">
	// 		<NewTicket
	// 			seat={"K17"}
	// 			ticketTitle="Invertis University"
	// 			eventName={"TED Talk"}
	// 			studentName={"Varun Pratap"}
	// 			studentID={"BCS2021057"}
	// 			course={"B.Tech CSE"}
	// 			eventDate={`7 / 11 / 2023`}
	// 			qrCode={
	// 				<QRCode size={130} value={`${"ticket.eventID"}%::%${"ticket.seatNo"}`} color="#000" bgColor="#FFF"/>
	// 			}
	// 		/>
	// 	</div>
	// );

	const download = (dataurl: string, filename: string) => {
		const link = document.createElement("a");
		link.href = dataurl;
		link.download = filename;
		link.click();
	};

	const downloadAllTickets = () => {
		let node = document.getElementById("all-tickets-wrapper") as HTMLElement;

		toPng(node).then((dataURL) => {
			download(dataURL, `all_tickets`);
		});

		// New code to download CSV
		let allTickets: Array<Array<any>> = [];
		ticketsData.forEach((ticket: EventTicket, i) => {
			allTickets.push([
				ticket.seatNo,
				ticket.name,
				ticket.studentCourse,
				ticket.studentID,
			]);

			<div className="generateall-ticket-wrapper">
				<Ticket
					seat={ticket.seatNo}
					ticketTitle="Invertis University"
					eventName={ticket.eventName}
					studentName={ticket.name}
					studentID={ticket.studentID}
					course={ticket.studentCourse}
					eventDate={`7 / 11 / 2023`}
					qrCode={
						<QRCode
							size={150}
							value={`${ticket.eventID}%::%${ticket.seatNo}`}
						/>
					}
				/>
			</div>;
		});

		let csvString = "";
		allTickets.forEach((rowItem, rowIndex) => {
			rowItem.forEach((colItem, colIndex) => {
				csvString += colItem + ",";
			});
			csvString += "\r\n";
		});

		csvString = "data:application/csv," + encodeURIComponent(csvString);
		var x = document.createElement("A");
		x.setAttribute("href", csvString);
		x.setAttribute("download", "ticketsData.csv");
		document.body.appendChild(x);
		x.click();
	};

	return (
		<div>
			<button
				onClick={() => {
					downloadAllTickets();
				}}>
				DOWNLOAD AS PNG
			</button>
			<div id="all-tickets-wrapper">{tickets}</div>
		</div>
	);
}

export default AllTicketsPage;
