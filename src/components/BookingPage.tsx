import React, { useState } from "react";
// import { InputNumber } from 'antd';
import "../styles/BookingPage.css";
import Seat, { SeatState } from "./Seat";

function BookingPage() {
    const [selectedSeat, setselectedSeat] = useState("");
    // const [seatsState, setseatsState] = useState<Array<SeatState>>([]);

	const onselectSeat = (value: string | null) => {
		console.log("Seat Clicked");
		if (value != null) setselectedSeat(value);
	};

	const balconySeatStyle: React.CSSProperties = {
		// backgroundColor: "white"
	};

	return (
		<div>
			<div id="booking-page">
				<div>You selected {selectedSeat} Seat</div>

				<div
					id="seating-layout"
					style={{ minWidth: "800px", overflow: "scroll" }}>
					<div className="balcony">
						<div className="seating-header">BALCONY</div>
						<div className="seating-section">
							<div className="row-name">NN</div>
							<Seat
								seatNo={1}
								seatID={"NN1"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={2}
								seatID={"NN2"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={3}
								seatID={"NN3"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={4}
								seatID={"NN4"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={5}
								seatID={"NN5"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={6}
								seatID={"NN6"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={7}
								seatID={"NN7"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={8}
								seatID={"NN8"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={9}
								seatID={"NN9"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={10}
								seatID={"NN10"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>

							<div className="top-walkway"></div>
							<Seat
								seatNo={11}
								seatID={"NN11"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={12}
								seatID={"NN12"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={13}
								seatID={"NN13"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={14}
								seatID={"NN14"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={15}
								seatID={"NN15"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={16}
								seatID={"NN16"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={17}
								seatID={"NN17"}
								onSelect={onselectSeat}
								seatState={SeatState.occupied}
							/>
							<Seat
								seatNo={18}
								seatID={"NN18"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={19}
								seatID={"NN19"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
							/>
							<Seat
								seatNo={20}
								seatID={"NN20"}
								onSelect={onselectSeat}
								seatState={SeatState.empty}
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
			<div className="footer">
				<span className="footer-label">Select number of tickets to book: </span>
				{/* <InputNumber min={1} max={10} defaultValue={noOfTickets} onChange={onChange} /> */}
			</div>
		</div>
	);
}

export default BookingPage;
