const express = require("express");
const cors = require('cors')
const db = require('./firebase_setup')

let port = process.env.PORT || 8000;

const app = express();
app.use(express.json())
app.use(cors({ origin: "*" }))


// The endpoint used by client to book the ticket for an event
// app.post("/bookticket", async (req, res) => {

//     // TODO: IF these parameters are not there fail the request

//     var eventID = req.body['eventID'];
//     var seatNumber = req.body['seatNumber'];
//     var userEmail = req.body['userEmail'];
//     var userName = req.body['userName'];
//     var userPhone = req.body['userNumber'];
//     var userStudentID = req.body['studentID'];

//     //EventDoc Reference for which the ticket is being booked
//     const eventDocRef = db.collection("events").doc(eventID);

//     try {
//         await db.runTransaction(async (transaction) => {
//             const eventDoc = await transaction.get(eventDocRef);

//             // If this event is there
//             if (eventDoc.exists) {
//                 const seatsData = new Map(
//                     Object.entries(eventDoc.get("seats"))
//                 );

//                 const ticketData = eventDoc.get("tickets");

//                 if (seatsData.get(seatNumber)) {
//                     // TODO: Handle it, The seat is already booked by someone;
//                     res.send({
//                         code: 200,
//                         bookingSuccessful: false,
//                         message: "Seat is already booked."
//                     })

//                 } else {
//                     const newSeatsData = seatsData.set(seatNumber, true);

//                     // Check if there is a ticket already with this email??
//                     let userHasTicket = false;
//                     ticketData.forEach((ticket) => {
//                         if (ticket.email === userEmail) userHasTicket = true;
//                     });

//                     // If user has already booked a ticket for this event then do not book the ticket again
//                     if (userHasTicket) {
//                         // TODO: Handle it, This user Already booked the ticket for this event
//                         res.send({
//                             code: 200,
//                             bookingSuccessful: false,
//                             message: "You have already booked a ticket for this event."
//                         })
//                     }

//                     const newTicketsData = ticketData.concat({
//                         email: userEmail,
//                         name: userName,
//                         phone: userPhone,
//                         studentID: userStudentID,
//                         seatNo: seatNumber,
//                     });

//                     transaction.update(eventDocRef, {
//                         seats: Object.fromEntries(newSeatsData),
//                     });


//                     transaction.update(eventDocRef, {
//                         tickets: newTicketsData,
//                     });

//                     // console.log("NewTicketData:", newTicketsData);

//                     // TODO: Handle it, Ticket Succesfully booked
//                     res.send({
//                         code: 200,
//                         bookingSuccessful: true,
//                         message: "Seat booked successfully."
//                     })
//                 }
//             } else {
//                 // TODO: Handle it, Event user trying to book ticket for, does not exist
//                 res.send({
//                     code: 404,
//                     bookingSuccessful: false,
//                     message: "Event does not exist."
//                 })
//             }
//         })

//     } catch (err) {
//         console.log(err);
//     }
// });


// Endpoint used by the client to get all the live events
// app.get("/events", (req, res) => {

//     var response = [];
//     db.collection("events").get().then((docs) => {
//         docs.forEach((doc) => {
//             var title = doc.get("title");
//             var description = doc.get("description");
//             var id = doc.id;
//             var imageURL = doc.get("imageURL");

//             response = response.concat({
//                 id: id,
//                 title: title,
//                 description: description,
//                 imageURL: imageURL
//             });
//         })
//         res.send(response);
//     });


// });



// Endpoint used by the client to get the delail for one particular event
// app.get("/events/:id", (req, res) => {

//     const eventID = req.params['id'];
//     const eventDocRef = db.collection("events").doc(eventID);

//     eventDocRef.get().then((event) => {
//         if (event.exists) {

//             const seatsData = event.get("seats");

//             const eventTitle = event.get("title");

//             res.status(200).send({
//                 id: eventID,
//                 seats: seatsData,
//                 title: eventTitle
//             });
//         } else {

//             res.status(404).send({
//                 message: "Event does not exist."
//             });
//         }
//     });
// });

app.listen(port, () => {
    console.log("Listen on the PORT", port);
});