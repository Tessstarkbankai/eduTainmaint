import { Button, Flex, Form, Input, InputNumber } from "antd";
import "../styles/SeatBookingPage.css";
import { runTransaction, doc } from "@firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { firestore } from "../fireabse_setup/firebase";
import { useAuth } from "../fireabse_setup/AuthContext";

function SeatBookingPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const { currentUser } = useAuth();

	useEffect(() => {
		if (!location.state) navigate("/events");
	}, []);

	if (!location.state) {
		return null;
	}

	const onFinish = async (values: any) => {
		const eventDocRef = doc(firestore, "events", location.state.eventID);
		try {
			await runTransaction(firestore, async (transaction) => {
				const eventDoc = await transaction.get(eventDocRef);
				if (eventDoc.exists()) {
					const seatsData = new Map<String, Boolean>(
						Object.entries(eventDoc.get("seats"))
					);

					const ticketData: Array<any> = eventDoc.get("tickets");

					if (seatsData.get(location.state.seatNumber)) {
						// Handle it, The seat is already booked by someone;
						console.log("Seat Aready Booked by Someone!!");
						return Promise.reject("Seat Aready Booked by Someone!!");
					} else {
						const newSeatsData = seatsData.set(location.state.seatNumber, true);

						// Check if there is a ticket already with this email??
						let userHasTicket = false;
						ticketData.forEach((ticket) => {
							if (ticket.email === currentUser?.email?.toString())
								userHasTicket = true;
						});

						// If user has already booked a ticket for this event then do not book the ticket again
						if (userHasTicket) {
							console.log("You already booked a ticket for this event!!!");
							return Promise.reject(
								"You already booked a ticket for this event!!!"
							);
						}

						const newTicketsData = ticketData.concat({
							email: currentUser?.email?.toString(),
							name: values.name,
							phone: values.phone,
							studentID: values.studentID,
							seatNo: location.state.seatNumber,
						});

						// Check if the

						transaction.update(eventDocRef, {
							seats: Object.fromEntries(newSeatsData),
						});

						console.log("NewTicketData:", newTicketsData);

						transaction.update(eventDocRef, {
							tickets: newTicketsData,
						});

						// Redirect user to ticket page On Successful Booking
						navigate("ticket/", {
							state: {
								studentName: values.name,
								studentID: values.studentID,
								seatNumber: location.state.seatNumber,
								eventTitle: location.state.title,
								eventID: location.state.eventID,
							},
						});

						console.log("Seat Booked!!");
						return Promise.resolve("Seat Booked!!");
					}
				}
			});
		} catch (e) {
			console.error(e);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Flex
			vertical
			align="center"
			justify="center"
			gap="large"
			style={{ minHeight: "100vh" }}>
			<div className="page-title">Seat Booking for {location.state.title}</div>

			<Form
				name="seat-booking-form"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: "800px" }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<Form.Item<string>
					label="Name"
					name="name"
					rules={[{ required: true, message: "Please enter your name!" }]}>
					<Input />
				</Form.Item>

				<Form.Item<string>
					label="Student ID"
					name="studentID"
					rules={[
						{ required: true, message: "Please enter your student ID!" },
					]}>
					<Input />
				</Form.Item>

				<Form.Item<number>
					label="Phone Number"
					name="phone"
					rules={[
						{ required: true, message: "Please enter your phone number!" },
					]}>
					<InputNumber
						addonBefore="+91"
						min={1111111111}
						max={9999999999}
						controls={false}
					/>
				</Form.Item>

				<Form.Item<string> label="Email" name="email">
					<Input disabled defaultValue={currentUser?.email?.toString()} />
				</Form.Item>

				<Form.Item<string> label="Event" name="eventName">
					<Input disabled defaultValue={location.state.title} />
				</Form.Item>

				<Form.Item<string> label="Seat No." name="seatNumber">
					<Input disabled defaultValue={location.state.seatNumber} />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Book Ticket
					</Button>
				</Form.Item>
			</Form>
		</Flex>
	);
}

export default SeatBookingPage;
