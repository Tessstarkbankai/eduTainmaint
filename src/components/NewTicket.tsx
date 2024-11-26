import "../styles/NewTicket.css";
import {ReactNode} from "react";
import logo from "../tedx-logo.png";

export interface TicketProps {
	ticketTitle: string;
	eventName: string;
	seat: string;
	studentName: string;
	studentID: string;
	course: string;
	eventDate: string;
	qrCode: ReactNode;
}

function NewTicket({
	ticketTitle,
	seat,
	eventName,
	studentName,
	studentID,
	course,
	eventDate,
	qrCode,
}: TicketProps) {
	return (
		// <div className="new-ticket-wrapper">
		// 	<div className="new-ticket-element new-ticket-title">{ticketTitle}</div>
		// 	<div className="new-ticket-element ticket-eventName">
		// 		<p className="label">Event Name</p>
		// 		<p className="data">{eventName}</p>
		// 	</div>
		// 	<div className="new-ticket-element ticket-studentName">
		// 		<p className="label">Student Name</p>
		// 		<p className="data">{studentName}</p>
		// 	</div>

		// 	<div className="new-ticket-element ticket-studentID">
		// 		<p className="label">Student ID</p>
		// 		<p className="data">{studentID}</p>
		// 	</div>
		// 	<div className="new-ticket-element ticket-seatNumber">
		// 		<p className="label">Seat</p>
		// 		<p className="data">{seat}</p>
		// 	</div>
		// 	<div className="new-ticket-element ticket-studentCourse">
		// 		<p className="label">Course</p>
		// 		<p className="data">{course}</p>
		// 	</div>
		// 	<div className="new-ticket-element ticket-eventDate">
		// 		<p className="label">Event Date</p>
		// 		<p className="data">{eventDate}</p>
		// 	</div>
		// 	<div className="new-ticket-element ticket-qrCode">{qrCode}</div>
		// </div>

		<div className="new-ticket-wrapper">
			<div className="ticket-left">
				<img
					src={logo}
					alt="tedxiu-logo"
					height="150px"
					width="450px"
					// style={{aspectRatio:"3/5"}}
				/>
				<div className="border-text">
					<span className="ted">TED</span>
					<span className="x">X</span>
					<span className="talks">TALKS</span>
				</div>

				<div className="corner-text">
					<p className="tedx">
						TED<span className="x">X</span>
					</p>
					<p className="iu">INVERTIS UNIVERSITY</p>
					<p className="season">SEASON 02 2023</p>
				</div>

				<div className="left-data">
					<div className="student-data">
						{/* <div className="name">{studentName}</div> */}
						{/* <div className="id">{studentID}</div> */}
					</div>
					<div className="date">07 NOV | 10 AM</div>
					{/* <div className="abhiruchi">ABHIRUCHI</div> */}
				</div>
			</div>
			<div className="ticket-right">
				<div className="qrCode">{qrCode}</div>
				<div className="right-data">
					<div className="ticket-number">Ticket Number</div>
					<div className="seatNo">{seat}</div>
				</div>
			</div>

			<div className="white-corner top-left"></div>
			<div className="white-corner top-right"></div>
			<div className="white-corner bottom-left"></div>
			<div className="white-corner bottom-right"></div>
		</div>
	);
}

export default NewTicket;
