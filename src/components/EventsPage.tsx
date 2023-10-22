import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/EventsPage.css";
import {
	getDocs,
	collection,
	QuerySnapshot,
	DocumentData,
} from "@firebase/firestore";
import { firestore } from "../fireabse_setup/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ref = collection(firestore, "events");
function EventsPage() {
	const [snapshot, setsnapshot] =
		useState<QuerySnapshot<DocumentData, DocumentData>>();

	const navigate = useNavigate();

	useEffect(() => {
		getDocs(ref).then((snapshot) => {
			setsnapshot(snapshot);
		});
	}, []);

	var cards: Array<any> = [];
	snapshot?.docs.forEach((doc) => {
		cards.push(
			<Card
				key={doc.id}
				onClick={() => {
					navigate(`/book/${doc.id}`);
				}}
				hoverable
				// style={{ width: 400 }}
				cover={
					<img
						width={"200px"}
						height={"300px"}
						alt={doc.get("title")}
						src={doc.get("imageURL")}
					/>
				}>
				<Meta title={doc.get("title")} description={doc.get("description")} />
			</Card>
		);
	});

	return (
		<div>
			<div style={{ fontWeight: "bold", fontSize: "30px" }}>LIVE EVENTS</div>
			<div className="cards" style={{ margin: "10px 20px" }}>
				{cards}
			</div>
		</div>
	);
}

export default EventsPage;

{
	/* <Card
	hoverable
	style={{ width: 400 }}
	cover={
		<img
			width={"200px"}
			height={"200px"}
			alt={event.get("title")}
			src={event.get("imageURL")}
		/>
	}>
	<Meta title={event.get("title")} description={event.get("description")} />
</Card>; */
}
