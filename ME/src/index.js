import dotenv from "dotenv";
import connectDB from "./mongodb.js";
import UserModel from "./models/users.js";  // Import UserModel

import express from "express";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// Connect to Database
connectDB()
    .then(() => {
        app.on("error", (error) => console.log("ERROR: ", error));

        app.listen(process.env.PORT || 8000, () => {
            console.log("Listening on port no.", process.env.PORT);
        });
    })
    .catch((e) => console.log("Connection error: ", e));

// ✅ **Login Route**
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                return res.json("Login Success");
            } else {
                return res.json("Password Incorrect");
            }
        } else {
            return res.json("User does not exist");
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// ✅ **Signup Route**
app.post('/signup', async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        return res.json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
