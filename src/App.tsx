import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import EventsPage from "./components/EventsPage";
import CreateEventPage from "./components/CreateEventPage";
import HomePage from "./components/HomePage";
import {AuthProvider} from "./fireabse_setup/AuthContext";
import SeatBookingPage from "./components/SeatBookingPage";
import GenerateTicketPage from "./components/GenerateTicketPage";
import MyTicketsPage from "./components/MyTicketsPage";
import AllTicketsPage from "./components/AllTicketsPage";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/mytickets" element={<MyTicketsPage />} />
					<Route path="/generate/tickets/all/:eventID" element={<AllTicketsPage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/events/:eventID" element={<BookingPage />} />
					<Route path="/events/create" element={<CreateEventPage />} />
					<Route path="/events/:eventID/book/" element={<SeatBookingPage />} />
					<Route
						path="/ticket"
						element={<GenerateTicketPage />}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
