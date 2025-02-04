require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const playerRoutes = require("./routes/playerRoutes");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/players", playerRoutes);
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

