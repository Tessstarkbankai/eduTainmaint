// import {LoginOutlined} from "@ant-design/icons";
import {signInWithGoogle} from "../fireabse_setup/firebase";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../fireabse_setup/AuthContext";
import "../styles/HomePage.css";
import {Button, Card, Col, Flex, Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import { client } from "../axios";
import Meta from "antd/es/card/Meta";

type Ticket = {
	name: string;
	eventName: string;
	seatNo: string;
    studentID: string;
    studentCourse: string;
    eventID: string;
};

function MyTicketsPage() {
	const navigate = useNavigate();
	const {currentUser} = useAuth();
    const [ticketsArray, setTicketsArray] = useState([]);
    const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (currentUser == null) {
			navigate("/");
		}

		setLoading(true);
		client
			.post("/mytickets", {
				userID: currentUser?.uid,
			})
			.then((res) => {
				setTicketsArray(res.data);
				console.log(res.data);
				setLoading(false);
			});
    }, []);
    

    var cards: Array<any> = [];
		ticketsArray.forEach((ticket: Ticket, i) => {
			cards.push(
				<Col xs={24} sm={24} md={12} lg={8} xl={8} key={ticket.eventName}>
					<Card
						className="event-card"
						onClick={() => {
							navigate("/ticket", {
								state: {
									eventID: ticket.eventID,
									eventTitle: ticket.eventName,
									seatNumber: ticket.seatNo,
									studentName: ticket.name,
									studentID:ticket.studentID,
									studentCourse:ticket.studentCourse,
								},
							});
						}}
						hoverable>
						<Meta title={ticket.eventName} description={ticket.seatNo} />
					</Card>
				</Col>
			);
		});

	return (
		<Layout className="layout-mytickets">
			<Header>
				<Navbar />
			</Header>

            <Content className="content-mytickets">
                {cards}
            </Content>
		</Layout>
	);
}

export default MyTicketsPage;
