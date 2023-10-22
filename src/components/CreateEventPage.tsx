import { Button, DatePicker, Form, Input, Space } from "antd";
import { collection, addDoc, Timestamp } from "@firebase/firestore";
import { firestore } from "../fireabse_setup/firebase";
import { RangePickerProps } from "antd/es/date-picker";
import { useState } from "react";
import { allEmptySeats } from "./SeatsMap";
const { RangePicker } = DatePicker;

const eventsRef = collection(firestore, "events");

function CreateEventPage() {
	let defaultStartDate = new Date(Date.now());
	let defaultEndDate = new Date(Date.now() + 7 * 86400000); // 7 days from now

	const [startDate, setStartDate] = useState<Date>(defaultStartDate);
	const [endDate, setEndDate] = useState<Date>(defaultEndDate);

	const createEvent = (
		title: String,
		description: string,
		imageURL: string
	) => {
		addDoc(eventsRef, {
			title: title,
			description: description,
			imageURL: imageURL,
			bookingStartTime: Timestamp.fromDate(startDate),
			bookingEndTime: Timestamp.fromDate(endDate),
			seatsAvailable: 1040,
			tickets: [],
			seats: allEmptySeats,
		});
	};

	const onFinish = (values: any) => {
		createEvent(values.title, values.description, values.imageURL);
		// console.log(values.title);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	// const onChange = (
	// 	value: RangePickerProps["value"],
	// 	dateString: [string, string]
	// ) => {
	// 	console.log("Selected Time: ", value);
	// 	console.log("Formatted Selected Time: ", dateString);
	// };

	const onOk = (value: RangePickerProps["value"]) => {
		if (value !== undefined && value?.[0] !== null && value?.[1] != null) {
			setStartDate(value[0].toDate());
			setEndDate(value[1].toDate());
		}
	};

	return (
		<Form
			name="create-event-form"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off">
			<Form.Item<string>
				label="Event Title"
				name="title"
				rules={[{ required: true, message: "Please input Event Title!" }]}>
				<Input />
			</Form.Item>

			<Form.Item<string>
				label="Event Description"
				name="description"
				rules={[
					{ required: true, message: "Please input Event Description!" },
				]}>
				<Input.TextArea />
			</Form.Item>

			<Form.Item<string>
				label="Event Image URL"
				name="imageURL"
				rules={[{ required: true, message: "Please input Event Image URL!" }]}>
				<Input />
			</Form.Item>

			<Form.Item<string>
				label="Booking Start and End Date"
				name="dateRangePicker"
				rules={[
					{
						message: "Please Select Booking Start and End Date!",
					},
				]}>
				<Space direction="vertical" size={12}>
					<RangePicker
						showTime={{ format: "HH:mm" }}
						format="YYYY-MM-DD HH:mm"
						// onChange={onChange}
						onOk={onOk}
					/>
				</Space>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Create Event
				</Button>
			</Form.Item>
		</Form>
	);
}

export default CreateEventPage;

// import React from "react";

// type FieldType = {
// 	username?: string;
// 	password?: string;
// 	remember?: string;
// };

// const App: React.FC = () => (

// );

// export default App;
