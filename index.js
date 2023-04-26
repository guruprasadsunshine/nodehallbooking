// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
const app = express(); 
import bookingRouter from './routes/booking.route.js'
import roomRouter from './routes/room.route.js'
import * as dotenv from 'dotenv' 
dotenv.config()
  
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // phone dial// top-level await
await client.connect(); // call button
console.log("Mongo is connected ✌️😊");
 
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


// For creating Room 

// const room = [
//   {
//       "id":"1",
//       "fk":"101",
//       "roomName":"High",
//       "noOfSeats":"5",
//       "amentities":"Air Conditioner, Balcony, Smart TV, Telephone, Free Wifi, Iron Box, Water Heater",
//       "priceForeOneHour":"Rs.1000",
//       "status":"Booked"
//   },
//       {
//           "id":"2",
//           "fk":"102",
//           "roomName":"Medium",
//       "noOfSeats":"5",
//       "amentities":"Balcony, Smart TV, Telephone, Water Heater",
//       "priceForeOneHour":"Rs.600",
//       "status":"Booked"
//   },
//           {
//               "id":"3",
//               "fk":"103",
//               "roomName":"Low",
//       "noOfSeats":"5",
//       "amentities":"Balcony, Telephone, Water Heater",
//       "priceForeOneHour":"Rs.400",
//       "status":"Booked"
//   }
// ]

// For Booking

// const booking = [
//   {
//     "id": "1",
//     "roomID": "101",
//     "customerName":"Krishnan",
//     "date":"2022-11-30T18:25:43.511Z",
//     "startTime":"11:00",
//     "endTime":"22:00"
//     },
//     {
//       "id": "2",
//       "roomID": "102",
//       "customerName":"Krishnan",
//       "date":"2022-11-20T18:25:43.511Z",
//       "startTime":"10:00",
//       "endTime":"20:00"
//       },
//       {
//         "id": "3",
//         "roomID": "103",
//         "customerName":"Krishnan",
//         "date":"2022-11-10T18:25:43.511Z",
//         "startTime":"09:00",
//         "endTime":"16:00"
//         }
// ]


app.use(express.json())
app.use('/booking', bookingRouter)
app.use('/room', roomRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client}
