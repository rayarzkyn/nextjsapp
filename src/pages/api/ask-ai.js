export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Only POST method allowed" });
    }
  
    const { message } = req.body;
  
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "openchat/openchat-7b", // ✅ GRATIS & VALID
            messages: [{ role: "user", content: message }],
          }),
      });
  
      const data = await response.json();
  
      // Log seluruh response untuk debugging
      console.log("Response dari OpenRouter:", data);
  
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        res.status(200).json({ reply: data.choices[0].message.content });
      } else {
        res.status(500).json({
          message: "Model tidak memberikan jawaban",
          data,
        });
      }
    } catch (error) {
      console.error("OpenRouter API error:", error);
      res.status(500).json({ message: "OpenRouter API error", error: error.message });
    }
  }
  