const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
    url: String,
    processedData: Object,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Video", VideoSchema);

