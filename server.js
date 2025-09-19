const express = require("express");
const path = require("path");

const app = express();
// use environment PORT when available (platforms set this), otherwise 3000 for local dev
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.post("/submit", (req, res) => {
  console.log("Form submitted:", req.body);
  res.send("<h2>Thanks for submitting the form!</h2><a href='/'>Go Back</a>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
