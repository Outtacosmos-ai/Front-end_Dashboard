const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB URI
const dbURI = "mongodb://localhost:27017/myDatabase";

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); // for parsing application/json

// Define routes
app.get("/", (req, res) => res.send("Hello World!"));

// Additional example route, possibly for fetching data
app.get('/api/data', (req, res) => {
  // Simulated data that could come from a database
  res.json({
    message: "Here's some data from your API!",
    data: [
      { id: 1, name: 'Product One' },
      { id: 2, name: 'Product Two' }
    ]
  });
});

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));