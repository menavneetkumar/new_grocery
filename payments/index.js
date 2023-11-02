import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import payments from './routes/payments.js';
import Stripe from "stripe";

const app = express();
dotenv.config();

export const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/payments', payments);

app.get('/', (req, res) => {
    res.status(200).json({
        team_name: "Grocery",
        dev_team: ["Navneet", "Shivam", "Saket", "Anandrao"].sort()
    })
});

const PORT = process.env.PORT || 5000;

const handleServerStartup = () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}

handleServerStartup();

export default app