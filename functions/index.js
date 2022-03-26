// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const stripe = require("stripe")(
//   "sk_test_51KgkXXAbjRL2sYEW7TFdgCDXOk97wxp2O0y9YtlOejCbTyUb0vlLYTREFuIzaU0w3NN2VSPtqbOkPPYH2A02YU9i00mbQsARHi"
// );

// // API

// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// // app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create?", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment request recieved for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // sub-units of the currency
//     currency: "usd",
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// // Example EndPoint

// // http://localhost:5001/clone-2b22c/us-central1/api
