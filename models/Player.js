const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    team: String,
    position: String,
    skillRatings: { type: Map, of: Number },
    trainingHistory: [{ date: Date, drills: [String] }],
    uploadedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }]
}, { timestamps: true });

module.exports = mongoose.model("Player", PlayerSchema);

