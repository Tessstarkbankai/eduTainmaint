import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SeatBookingPage() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!location.state) navigate("/events");
	}, []);

	if (!location.state) {
		return null;
	}

	console.log(location.state);

	const onFinish = (values: any) => {
		// createEvent(values.title, values.description, values.imageURL);
		// console.log(values.title);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
			<div style={{ fontWeight: "bold", fontSize: "32px" }}>
				Seat Booking for {location.state.title}
			</div>
			<div>
				<p>Seat No.: {location.state.seatNumber}</p>
				<p>Event ID: {location.state.eventID}</p>
			</div>

			<Form
				name="seat-booking-form"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
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
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please enter your email!" }]}>
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
					<InputNumber addonBefore="+91" min={1111111111} max={9999999999} />
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
		</div>
	);
}

export default SeatBookingPage;
