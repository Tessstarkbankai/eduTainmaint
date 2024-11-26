import {Button, Flex, Form, Input, InputNumber, notification} from "antd";
import "../styles/SeatBookingPage.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import {client} from "../axios";
import {
	NotificationPlacements,
	type NotificationPlacement,
} from "antd/es/notification/interface";



function SeatBookingPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const [api, contextHolder] = notification.useNotification();
	const {currentUser} = useAuth();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!location.state) navigate("/events");
	}, []);

	if (!location.state) {
		return null;
	}

	const openNotification = (
		placement: NotificationPlacement,
		title: string,
		description: string
	) => {
		api.info({
			message: title,
			description: description,
			placement,
		});
	};

	const onFinish = async (values: any) => {
		setLoading(true);
		client
			.post("/bookticket", {
				eventID: location.state.eventID,
				seatNumber: location.state.seatNumber,
				userEmail: currentUser?.email?.toString(),
				userName: values.name,
				userNumber: values.phone,
				studentID: values.studentID,
				studentCourse: values.studentCourse,
				userID: currentUser?.uid,
				eventDate: location.state.eventDate,
			})
			.then((res) => {
				let notificationTitle = "";
				let notificationDescription = "";
				if (res.status === 200) {
					notificationTitle = "Seat Booked Successfully";
					notificationDescription = "Redirecting you to the ticket page.";

					console.log(res.data.bookingData);

					// If booking data === null was sent by the server.
					// Means the ticket is not booked yet.
					// We will show a notification that ""Error: Something Went Wrong!""
					if (res.data.bookingData == null) {
						notificationTitle = "Booking Failed";
						notificationDescription = "Error: Something Went Wrong!";
					} else {
						navigate("/ticket", {
							state: {
								eventID: res.data.bookingData.eventID,
								eventTitle: res.data.bookingData.eventName,
								seatNumber: res.data.bookingData.seatNo,
								studentName: res.data.bookingData.studentName,
								studentID: res.data.bookingData.studentID,
								studentCourse: res.data.bookingData.studentCourse,
								eventDate: res.data.bookingData.eventDate,
							},
						});
					}
				} else if (res.status === 201) {
					notificationTitle = "Booking Failed";
					notificationDescription = "Seat is already booked.";
				} else if (res.status === 203) {
					notificationTitle = "Booking Failed";
					notificationDescription =
						"You have already booked a ticket for this event.";
				} else {
					notificationTitle = "Booking Failed";
					notificationDescription = "Event does not exist.";
				}

				openNotification(
					NotificationPlacements[0],
					notificationTitle,
					notificationDescription
				);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});

		// TODO: Handle and notify user about the server response
	};

	const onFinishFailed = (errorInfo: any) => {
		console.error("Booking Failed:", errorInfo);
	};

	return (
		<>
			{contextHolder}
			<Flex
				vertical
				align="center"
				justify="center"
				className="seat-booking-wrapper"
				gap="large"
				style={{
					minHeight: "100vh",
				}}>
				<Form
					name="seat-booking-form"
					className="seat-booking-form"
					labelCol={{span: 8}}
					wrapperCol={{span: 16}}
					style={{maxWidth: "800px"}}
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off">
					<div className="page-title">
						Seat Booking for {location.state.title}
					</div>

					<Form.Item<string>
						label="Name"
						name="name"
						rules={[{required: true, message: "Please enter your name!"}]}>
						<Input />
					</Form.Item>

					<Form.Item<string>
						label="Student ID"
						name="studentID"
						rules={[
							{required: true, message: "Please enter your student ID!"},
						]}>
						<Input />
					</Form.Item>

					<Form.Item<string>
						label="Course"
						name="studentCourse"
						rules={[{required: true, message: "Please enter your Course!"}]}>
						<Input />
					</Form.Item>

					<Form.Item<number>
						label="Contact"
						name="phone"
						rules={[
							{required: true, message: "Please enter your phone number!"},
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

					<Flex vertical align="center" justify="center">
						<Button type="primary" htmlType="submit" loading={loading}>
							Book Ticket
						</Button>
					</Flex>
				</Form>
			</Flex>
		</>
	);
}

export default SeatBookingPage;
