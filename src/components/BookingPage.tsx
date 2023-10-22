import React, { useEffect, useState } from "react";
import "../styles/BookingPage.css";
import Seat, { SeatState } from "./Seat";
import { useParams } from "react-router-dom";
import {
	getDoc,
	doc,
	DocumentSnapshot,
	DocumentData,
} from "@firebase/firestore";
import { firestore } from "../fireabse_setup/firebase";

export interface BookingPageProps {
	eventID: string;
}

function BookingPage() {
	const [selectedSeat, setselectedSeat] = useState("");

	const onselectSeat = (value: string | null) => {
		if (value != null) setselectedSeat(value);
	};

	let footerLabel = () => {
		if (selectedSeat == null || selectedSeat === "")
			return <span className="footer-label">Select a seat</span>;
		else
			return (
				<div>
					<span className="footer-label">Selected Seat is: {selectedSeat}</span>
					<button onClick={() => {}}> Continue </button>
				</div>
			);
	};

	const getSeatState = (
		seatsData: globalThis.Map<String, String>,
		seatID: string
	) => {
		if (seatsData.get(seatID)) return SeatState.occupied;
		else return SeatState.empty;
	};

	const balconySeatStyle: React.CSSProperties = {
		// backgroundColor: "white"
	};

	let { eventID } = useParams();
	const [snapshot, setsnapshot] =
		useState<DocumentSnapshot<DocumentData, DocumentData>>();

	useEffect(() => {
		if (eventID !== undefined) {
			getDoc(doc(firestore, "events", eventID)).then((snapshot) => {
				setsnapshot(snapshot);
			});
		}
	}, []);

	if (snapshot?.exists()) {
		let seatsData = new Map<String, String>(
			Object.entries(snapshot.get("seats"))
		);

		return (
			<div>
				<div id="booking-page">
					<div>You selected {selectedSeat} Seat</div>

					<div id="seating-layout">
						<div className="balcony">
							<div className="seating-header">BALCONY</div>
							<div className="seating-section">
								<div className="row-name">NN</div>
								<Seat
									seatNo={1}
									seatID={"NN1"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN1")}
								/>
								<Seat
									seatNo={2}
									seatID={"NN2"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN2")}
								/>
								<Seat
									seatNo={3}
									seatID={"NN3"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN3")}
								/>
								<Seat
									seatNo={4}
									seatID={"NN4"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN4")}
								/>
								<Seat
									seatNo={5}
									seatID={"NN5"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN5")}
								/>
								<Seat
									seatNo={6}
									seatID={"NN6"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN6")}
								/>
								<Seat
									seatNo={7}
									seatID={"NN7"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN7")}
								/>
								<Seat
									seatNo={8}
									seatID={"NN8"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN8")}
								/>
								<Seat
									seatNo={9}
									seatID={"NN9"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN9")}
								/>
								<Seat
									seatNo={10}
									seatID={"NN10"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN10")}
								/>

								<div className="top-walkway"></div>
								<Seat
									seatNo={11}
									seatID={"NN11"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN11")}
								/>
								<Seat
									seatNo={12}
									seatID={"NN12"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN12")}
								/>
								<Seat
									seatNo={13}
									seatID={"NN13"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN13")}
								/>
								<Seat
									seatNo={14}
									seatID={"NN14"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN14")}
								/>
								<Seat
									seatNo={15}
									seatID={"NN15"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN15")}
								/>
								<Seat
									seatNo={16}
									seatID={"NN16"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN16")}
								/>
								<Seat
									seatNo={17}
									seatID={"NN17"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN17")}
								/>
								<Seat
									seatNo={18}
									seatID={"NN18"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN18")}
								/>
								<Seat
									seatNo={19}
									seatID={"NN19"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN19")}
								/>
								<Seat
									seatNo={20}
									seatID={"NN20"}
									onSelect={onselectSeat}
									seatState={getSeatState(seatsData, "NN20")}
								/>
								<div className="row-end-name">NN</div>

								<div className="row-name">MM</div>
								<Seat
									seatNo={1}
									seatID="MM1"
									onSelect={onselectSeat}
									seatState={SeatState.occupied}
								/>
								<div className="seat occupied" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="top-walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">MM</div>

								<div className="row-name">LL</div>
								<Seat
									seatNo={1}
									seatID="LL1"
									onSelect={onselectSeat}
									seatState={SeatState.occupied}
								/>
								<div className="seat occupied" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="top-walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">LL</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>

								<div className="row-name">KK</div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="row-end-name">KK</div>
							</div>
						</div>

						<div className="backside">
							<div className="seating-header">BACKSIDE</div>
							<div className="seating-section">
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
							</div>
						</div>

						<div className="front">
							<div className="seating-header">FRONT</div>
							<div className="seating-section">
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>

								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="walkway"></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
								<div className="seat" style={balconySeatStyle}></div>
							</div>
						</div>

						<div className="seating-header">SCREEN THIS WAY</div>
					</div>
				</div>
				<div className="footer">{footerLabel()}</div>
			</div>
		);
	} else {
		return <div>ERROR 404 - Event does not exist</div>;
	}
}

export default BookingPage;
