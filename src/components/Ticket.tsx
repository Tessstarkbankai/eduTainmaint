import "../styles/Ticket.css";
import { ReactNode } from "react";

export interface TicketProps {
    ticketTitle: string;
    eventName: string;
    seat: string;
    studentName: string;
    studentID: string;
    course: string;
    eventDate: string;
    qrCode: ReactNode
}

function Ticket({ticketTitle, seat, eventName, studentName, studentID, course, eventDate, qrCode}: TicketProps) {

	return (
		<div className="ticket-wrapper">
			<div className="ticket-element ticket-title">{ticketTitle}</div>
			<div className="ticket-element ticket-eventName">
				<p className="label">Event Name</p>
				<p className="data">{eventName}</p>
			</div>
			<div className="ticket-element ticket-studentName">
				<p className="label">Student Name</p>
				<p className="data">{studentName}</p>
			</div>

			<div className="ticket-element ticket-studentID">
				<p className="label">Student ID</p>
				<p className="data">{studentID}</p>
			</div>
			<div className="ticket-element ticket-seatNumber">
				<p className="label">Seat</p>
				<p className="data">{seat}</p>
			</div>
			<div className="ticket-element ticket-studentCourse">
				<p className="label">Course</p>
                <p className="data">{course}</p>
			</div>
			<div className="ticket-element ticket-eventDate">
				<p className="label">Event Date</p>
				<p className="data">{eventDate}</p>
			</div>
			<div className="ticket-element ticket-qrCode">{qrCode}</div>
		</div>
	);
}

export default Ticket;
