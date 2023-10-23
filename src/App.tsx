import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import EventsPage from "./components/EventsPage";
import CreateEventPage from "./components/CreateEventPage";
import HomePage from "./components/HomePage";
import { AuthProvider } from "./fireabse_setup/AuthContext";
import SeatBookingPage from "./components/SeatBookingPage";
import GenerateTicketPage from "./components/GenerateTicketPage";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/events/:eventID" element={<BookingPage />} />
					<Route path="/create-event" element={<CreateEventPage />} />
					<Route path="/events/:eventID/book/" element={<SeatBookingPage />} />
					<Route
						path="/events/:eventID/book/ticket"
						element={<GenerateTicketPage />}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
