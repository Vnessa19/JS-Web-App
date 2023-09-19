'use strict';

import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';
import {products} from './products.js';

const PORT = process.env.PORT
const app = express();

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static('public'));

let calls = 0;
app.use('/random-person', (req, res, next) => {
  calls++;
  if(calls % 10 === 0) {
    console.log(`Express server has been called ${calls} times.` );
  }
  next();
});

app.get('/random-person', asyncHandler(async (req,res) => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    res.send(data);
}));

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send(`<h2>500 error: The server is taking a nap.<h2><p>Our team is waking it up. Please try again later.</p>`)
});

function CompareProductData(select){
  for (const oneItem of products){
    if (oneItem.product === select) {
      return oneItem;
    }
  }
}
app.post("/order",(req,res) =>{
  const selected = CompareProductData(req.body.select);
  const quantity = req.body.quantity;
  const totalPrice = selected.price * quantity;
  const name = req.body.firstlast;
  const address = req.body.address;
  const delivery = req.body.delivery;
  
  res.send(`
      ${htmlTop}
      <section>
      <h2>Confirmation</h2>
      <article>
      <p class="orderMessage" >
        <p>Hi ${name}. Thank you for your order. </p>
        <p>You chose the <strong>${selected.product}</strong> from ${selected.company}.
        the quantity is <strong>${quantity}</strong>, the total cost is <strong>${totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        })}</strong>.</p>
        <p>An invoice has been sent to your email with the order information. Please confirm the information in the 
        order and follow the instructions in the email for payment.</p> 
        <p>Once payment received, your order will be shipped to your address on <strong>${address}</strong> within three business days. </p>
        <p>${delivery != '' ? `Your delivery instruction is noted: <strong>${delivery}</strong>` : ''}</p>
      ${htmlBottom}
      `)
});

app.post("/submit", (req, res) => {
  const person = req.body.firstlast;
  const place  = req.body.referrer;
  const review = req.body.review;
  const comments = req.body.comments;
  const subscribe = req.body.subscribe;
  const email = req.body.email;

  async function processEmail() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
          user: 'mylene.satterfield6@ethereal.email',
          pass: 'RX1T4Kh8bUqQfXWtsp'
      }
    });

    let info = await transporter.sendMail({
      from: `${email}`, // sender address
      to: "mylene.satterfield6@ethereal.email", // list of receivers
      subject: `${person}`, // Subject line
      text: `${place},${review},${comments},${subscribe}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
 
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  res.send(`
    ${htmlTop}
    <section>
    <h2>Contact</h2>
    <p></p>
    <article>
    <h3>Hello, <strong>${person}</strong>, thank you for visiting my site.</h3>
    <p>I am glad to know that you heard of me from the <strong>${place}</strong>. 
    ${review ? `<p>Thank you for your review!</p>` : ''}
    <p>Thank you for your message: <strong>${comments}</strong></p>
    <p>I will get back to you soon.</p>
    ${subscribe === 'on' ? `<p>Thank you for subscribing. Your email has been added to my mailing list.</p>` : ''}
    ${htmlBottom}
  `);

  processEmail(); 
}); 

let htmlTop = `
<!doctype html>
<html lang="en">

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Vanessa Mota-Li</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <header>
        <h1>Vanessa Mota-Li</h1>
    </header>

    <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
        <a href="order.html">Order</a>
        <a href="staff.html">Staff</a>
    </nav>

    <main>
        
          
`;

let htmlBottom = `
          </article>
        </section>
    </main>
<p><footer>&copy 2023 Vanessa Mota-Li</footer></p>    
</body>
</html> 
`;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});