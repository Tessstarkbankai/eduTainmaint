import "../styles/Ticket.css";

export interface TicketProps {
    ticketTitle: string;
    seatNo: string;
    eventName: string;
}

function Ticket({ticketTitle, seatNo, eventName}: TicketProps) {

	return (
        <div className="ticket-wrapper">
            <div className="ticket-title">{ticketTitle}</div>
            <div className="ticket-eventName">{eventName}</div>
            <div className="ticket-studentName">{eventName}</div>
            <div className="ticket-studentID">{eventName}</div>
            <div className="ticket-seatNumber">{eventName}</div>
            <div className="ticket-studentCourse">{eventName}</div>
            <div className="ticket-eventDate">{eventName}</div>
            <div className="ticket-qrCode">{eventName}</div>
        </div>
	);
}

export default Ticket;
