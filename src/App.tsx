import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./components/BookingPage";
import EventsPage from "./components/EventsPage";
import CreateEventPage from "./components/CreateEventPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<EventsPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/create-event" element={<CreateEventPage />} />
				<Route path="/book" element={<EventsPage />} />
				<Route path="/book/:eventID" element={<BookingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
