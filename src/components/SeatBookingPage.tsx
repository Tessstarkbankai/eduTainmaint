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
import {auth} from "../fireabse_setup/firebase";

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

			})
			.then((res) => {
				let notificationTitle = "";
				let notificationDescription = "";
				if (res.status === 200) {
					notificationTitle = "Seat Booked Successfully";
					notificationDescription = "Redirecting you to the ticket page.";
					navigate("/ticket", {
						state: {
							eventID: location.state.eventID,
							eventTitle: location.state.title,
							seatNumber: location.state.seatNumber,
							studentName: values.name,
							studentID: values.studentID,
							studentCourse: values.studentCourse,
						},
					});
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
				gap="large"
				style={{
					minHeight: "100vh",
				}}>
				<div className="page-title">
					Seat Booking for {location.state.title}
				</div>

				<Form
					name="seat-booking-form"
					labelCol={{span: 8}}
					wrapperCol={{span: 16}}
					style={{maxWidth: "800px"}}
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off">
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
						rules={[
							{required: true, message: "Please enter your Course!"},
						]}>
						<Input />
					</Form.Item>

					<Form.Item<number>
						label="Phone Number"
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

					<Form.Item wrapperCol={{offset: 8, span: 16}}>
						<Button type="primary" htmlType="submit" loading={loading}>
							Book Ticket
						</Button>
					</Form.Item>
				</Form>
			</Flex>
		</>
	);
}

export default SeatBookingPage;
