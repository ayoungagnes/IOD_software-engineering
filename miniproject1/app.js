const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.post("/api/quote", async (req, res) => {
    const { topic } = req.body;
    console.log("Request topic: ", topic);

    try{
        const chat = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `Give me a short, cheerful quote about ${topic}. Make it warm and encouraging.`
            }],
        });
    
        const quote = chat.choices[0].message.content;
        res.json({ quote });
    } catch (err) {
        console.error("OpenAI error: ", err);
        res.status(500).json({ error : "Failed to generate quote"});
    }
});

app.listen(5500, () => {
    console.log("Server running on http://127.0.0.1:5500/")});