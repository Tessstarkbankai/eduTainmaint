import React, { useState } from 'react';
import { InputNumber } from 'antd';
import "../styles/BookingPage.css"
import Seat, { SeatState } from './Seat';

function BookingPage () {

    const [selectedSeat, setselectedSeat] = useState(1);


    // const onChange = (value: number | null) => {
    //     if(value != null) setNoOfTickets(value);
    // };

    const balconySeatStyle: React.CSSProperties = {
        // backgroundColor: "white"
    }
    
    return(
        <div id="booking-page">
            {/* <div>You selected {noOfTickets} Tickets</div> */}

            <div id="seating-layout" style={{minWidth:"800px", overflow:"scroll"}}>
                <div className="balcony">
                    <div className="seating-header">BALCONY</div>
                    <div className="seating-section">
                        <div className="row-name">NN</div>
                        <Seat seatNo={'1'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'2'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'3'} seatState={SeatState.selected}/>
                        <Seat seatNo={'4'} seatState={SeatState.empty}/>
                        <Seat seatNo={'5'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'6'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'7'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'8'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'9'} seatState={SeatState.occupied}/>
                        <Seat seatNo={'10'} seatState={SeatState.occupied}/>
                        
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
                        <div className="row-end-name">NN</div>

                        <div className="row-name">NN</div>
                        <Seat seatNo={''} seatState={SeatState.occupied}/>
                        <div className="seat occupied" style={balconySeatStyle}></div>
                        <div className="seat" style={balconySeatStyle}></div>
                        <div className="seat selected" style={balconySeatStyle}></div>
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
                        <div className="row-end-name">NN</div>

                        <div className="row-name">NN</div>
                        <Seat seatNo={''} seatState={SeatState.occupied}/>
                        <div className="seat occupied" style={balconySeatStyle}></div>
                        <div className="seat" style={balconySeatStyle}></div>
                        <div className="seat selected" style={balconySeatStyle}></div>
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
                        <div className="row-end-name">NN</div>

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

            <div className="footer">
                <span className="footer-label">Select number of tickets to book: </span>
                {/* <InputNumber min={1} max={10} defaultValue={noOfTickets} onChange={onChange} /> */}
            </div>
        </div>
    );
}



export default BookingPage;