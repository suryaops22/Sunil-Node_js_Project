const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// importing the dotenv module to use environment variables:
require("dotenv").config();

const api_key = process.env.SECRET_KEY;

const stripe = require("stripe")(api_key);

// Default STATIC_DIR to 'client' if not set
const staticDir = process.env.STATIC_DIR || 'client';

app.use(express.static(resolve(__dirname, staticDir)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const path = resolve(staticDir + "/index.html");
  res.sendFile(path);
});

app.get("/success", (req, res) => {
  const path = resolve(staticDir + "/success.html");
  res.sendFile(path);
});

app.get("/cancel", (req, res) => {
  const path = resolve(staticDir + "/cancel.html");
  res.sendFile(path);
});

app.get("/workshop1", (req, res) => {
  const path = resolve(staticDir + "/workshops/workshop1.html");
  res.sendFile(path);
});
app.get("/workshop2", (req, res) => {
  const path = resolve(staticDir + "/workshops/workshop2.html");
  res.sendFile(path);
});
app.get("/workshop3", (req, res) => {
  const path = resolve(staticDir + "/workshops/workshop3.html");
  res.sendFile(path);
});

const domainURL = process.env.DOMAIN;
app.post("/create-checkout-session/:pid", async (req, res) => {
  
  const priceId = req.params.pid;
  
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${domainURL}/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/cancel`,
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
  });
  res.json({
    id: session.id,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log(`You may access your app at: ${domainURL}`);
});
