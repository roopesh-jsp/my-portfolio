// Run this with: node check-models.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config({ path: ".env.local" });

async function listModels() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.error("Error: GEMINI_API_KEY not found in .env.local");
    return;
  }

  // Pure REST call to list models (bypassing SDK defaults)
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("API Error:", data.error.message);
    } else {
      console.log("✅ AVAILABLE MODELS FOR YOUR KEY:");
      data.models.forEach((m) => {
        if (m.name.includes("gemini")) {
          // Removes 'models/' prefix for cleaner reading
          console.log(`- ${m.name.replace("models/", "")}`);
        }
      });
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

listModels();
