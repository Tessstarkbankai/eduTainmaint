import "../styles/Seat.css";
export enum SeatState {
	occupied,
	selected,
	empty,
}

export interface SeatProps {
	seatNo: number;
	seatState: SeatState;
	seatID: String;
	onSelect: Function;
}

function Seat({ seatNo, seatState, seatID, onSelect }: SeatProps) {

    const handleSelect = (id: String) => {
        if (seatState !== SeatState.occupied) {
            onSelect(id);
        }
    }
    
	return (
		<div
			onClick={() => handleSelect(seatID)}
			className={`seat ${
				seatState === SeatState.occupied
					? "occupied"
					: seatState === SeatState.selected
					? "selected"
					: " "
			}`}>
			{seatNo}
		</div>
	);
}

export default Seat;
