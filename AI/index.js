const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors());

async function getUserData(token) {
  console.log(token);
  const response = await axios.post(
    "https://nqnj938h-3000.inc1.devtunnels.ms/api/v1/geminiData",
    { token },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  return response;
}

app.post("/sendReqToGemini", async (req, res) => {
  const { q, token } = req.body;

  console.log(token);

  const userData = getUserData(token);

  // console.log(userData);

  const apiKey = "AIzaSyCO5AApLZPotZM2Vz6LazgB0uZO9wcRhO8";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  const customInstructions =
    "You are my career counsellor so help me with my career journey! Dont give any answer to unappropriate questions and questions that are out of topic and dont give unnecessary outputs and advices, if some prompt that is out of topic then you should say sorry I cant provide info on that topic. Give each and every answer in good styled markdown format with line spaces! And the details of that user are as follows: ";

  const query = customInstructions + userData + q;

  const requestBody = {
    contents: [
      {
        parts: [{ text: query }],
      },
    ],
  };

  try {
    // Send request to the Gemini API
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Access the generated content
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

app.listen(3005, () => {
  console.log("Server started on 3005");
});

// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const app = express();

// app.use(express.json());
// app.use(cors());

// const sessions = {}; // In-memory store for session data

// app.post("/sendReqToGemini", async (req, res) => {
//   const { sessionId, q } = req.body;
//   const apiKey = "AIzaSyCO5AApLZPotZM2Vz6LazgB0uZO9wcRhO8"; // Add your API key here
//   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

//   const customInstructions =
//     "You are my career counsellor so help me with my career journey! Dont give any answer to unappropriate questions and questions that are out of topic. Give each and every answer in good styled markdown format with line spaces and in that md format add tailwind classes also"; // Define your custom instructions here

//   const permOut = ""

//   // Initialize session if it doesn't exist
//   if (!sessions[sessionId]) {
//     sessions[sessionId] = {
//       memory: [],
//       instructionsSent: false,
//     };
//   }

//   // Construct the query with custom instructions only on the first call
//   let query = sessions[sessionId].instructionsSent
//     ? q
//     : customInstructions + " " + q;

//   // Store the user's query in memory
//   sessions[sessionId].memory.push(q);
//   sessions[sessionId].instructionsSent = true; // Mark that instructions have been sent

//   const requestBody = {
//     contents: [
//       {
//         parts: [{ text: query }],
//       },
//     ],
//   };

//   try {
//     // Send request to the Gemini API
//     const response = await axios.post(url, requestBody, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Access the generated content
//     const generatedText = response.data.candidates[0]?.content?.parts[0]?.text;

//     if (generatedText) {
//       return res.json({
//         answer: generatedText,
//         memory: sessions[sessionId].memory,
//       });
//     } else {
//       console.log("Generated text not found in response.");
//       return res.status(500).json({ error: "Generated text not found." });
//     }
//   } catch (error) {
//     console.error("Error generating response:", error.message);
//     return res.status(500).json({ error: "Failed to generate response" });
//   }
// });

// // Endpoint to retrieve session memory
// app.get("/getSessionMemory/:sessionId", (req, res) => {
//   const { sessionId } = req.params;

//   if (sessions[sessionId]) {
//     return res.json({ memory: sessions[sessionId].memory });
//   } else {
//     return res.status(404).json({ error: "Session not found." });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on 3000");
// });
