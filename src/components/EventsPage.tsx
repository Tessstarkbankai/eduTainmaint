import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/EventsPage.css";
import {auth} from "../fireabse_setup/firebase";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import {client} from "../axios";

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
			<Card
				key={event.id}
				onClick={() => {
					navigate(`/events/${event.id}`);
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
		);
	});

	return (
		<div>
			<div style={{fontWeight: "bold", fontSize: "30px"}}>LIVE EVENTS</div>
			{loading ? (
				<div>Loading Events...</div>
			) : (
				<div className="cards" style={{margin: "10px 20px"}}>
					{cards}
				</div>
			)}
		</div>
	);
}

export default EventsPage;
