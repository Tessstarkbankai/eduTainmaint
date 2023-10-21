import '../styles/Seat.css'
export enum SeatState {
    occupied,
    selected,
    empty
}

export interface SeatProps {
    seatNo: string;
    seatState: SeatState

}

function Seat ({seatNo, seatState}:SeatProps) {
    return <div 
        className={`seat ${ seatState == SeatState.occupied ? 'occupied' : seatState == SeatState.selected ? 'selected' : ' '}`}>
            {seatNo}
        </div>
}

export default Seat;