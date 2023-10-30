import {Row, Col, Card, Layout, Spin} from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/EventsPage.css";
import {auth} from "../fireabse_setup/firebase";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import {client} from "../axios";
import {LoadingOutlined} from "@ant-design/icons";
import {Content, Header} from "antd/es/layout/layout";
import Navbar from "./Navbar";

type Event = {
	id: string;
	description: string;
	imageURL: string;
	title: string;
};

function EventsPage() {
	const {currentUser} = useAuth();
	const navigate = useNavigate();

	const [eventsArray, setEventsArray] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (currentUser == null) {
			console.log(auth.currentUser + "Null User");
			navigate("/");
		}

		setLoading(true);
		client.get("/events").then((res) => {
			setEventsArray(res.data);
			setLoading(false);
		});
	}, []);

	var cards: Array<any> = [];
	eventsArray.forEach((event: Event, i) => {
		cards.push(
			<Col xs={24} sm={24} md={12} lg={8} xl={8} key={event.id}>
				<Card
					className="event-card"
					onClick={() => {
						navigate(`/events/${event.id}`, {
							state: {eventImageURL: event.imageURL},
						});
					}}
					hoverable
					cover={
						<img
							width={"200px"}
							height={"300px"}
							alt={event.title}
							src={event.imageURL}
						/>
					}>
					<Meta title={event.title} description={event.description} />
				</Card>
			</Col>
		);
	});

	return (
		<Layout className="layout-events">
			<Header>
				<Navbar />
			</Header>

			<Content className="content-events">
				<div>
					<div className="events-heading">LIVE EVENTS</div>
					{loading ? (
						<div className="events-loading">
							<Spin
								indicator={<LoadingOutlined style={{fontSize: 80}} spin />}
							/>
							<div className="loading-text">Loading Live Events...</div>
						</div>
					) : (
						<Row className="cards-container">{cards}</Row>
					)}
				</div>
			</Content>
		</Layout>
	);
}

export default EventsPage;
