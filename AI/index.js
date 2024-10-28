const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

async function getUserData(token) {
  const decode = await jwt.decode(token);
  const email = decode.email;
  const response = await axios.post(
    "http://localhost:3000/",
    { email: email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.user;
}

app.post("/sendReqToGemini", async (req, res) => {
  const { q, token } = req.body;

  const userData = await getUserData(token);

  console.log(userData);

  const apiKey = "AIzaSyCO5AApLZPotZM2Vz6LazgB0uZO9wcRhO8";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const customInstructions =
    "You are my career counsellor so help me with my career journey! Dont give any answer to unappropriate questions and questions that are out of topic and dont give unnecessary outputs and advices, if some prompt that is out of topic then you should say sorry I cant provide info on that topic. Give each and every answer in good styled markdown format with line spaces! And the details of that user in the json format are as follows: ";

  const query =
    customInstructions +
    `my name is ${userData.name} , my age is ${userData.age}  , this is my bio ${userData.bio} , my gender is ${userData.gender} \n  and now my question is: ` +
    q;
  console.log(query);

  const requestBody = {
    contents: [
      {
        parts: [{ text: query }],
      },
    ],
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const generatedText = response.data.candidates[0]?.content?.parts[0]?.text;

    if (generatedText) {
      return res.json({ answer: generatedText });
    } else {
      console.log("Generated text not found in response.");
      return res.status(500).json({ error: "Generated text not found." });
    }
  } catch (error) {
    console.error("Error generating response:", error.message);
    return res.status(500).json({ error: "Failed to generate response" });
  }
});

app.post("/generateDesc", async (req, res) => {
  const { email } = req.body;

  const response = await axios.post(
    "http://localhost:3000/",
    { email: email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const age = response.data.user.age;
  const bio = response.data.user.bio;
  const gender = response.data.user.gender;
  const location = response.data.user.location;
  const proudmoment = response.data.user.proudmoment;

  const prompt = `Generate a description for me according to the following information that I am providing... I am a ${age} years old. My gender is ${gender}, I am from ${location}. Let me give a bit bio of myself ${bio} and these are some of my proud moments ${proudmoment} `;

  const requestBody = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  const apiKey = "AIzaSyCO5AApLZPotZM2Vz6LazgB0uZO9wcRhO8";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const generatedText = response.data.candidates[0]?.content?.parts[0]?.text;

    if (generatedText) {
      await axios.put("http://localhost:3000/updatedes", {
        email: email,
        description: generatedText,
      });
      return res.json({
        msg: "done",
      });
    } else {
      console.log("Generated text not found in response.");
      return res.status(500).json({ error: "Generated text not found." });
    }
  } catch (error) {
    console.error("Error generating response:", error.message);
    return res.status(500).json({ error: "Failed to generate response" });
  }
});

app.listen(3005, () => {
  console.log("Server started on 3005");
});
