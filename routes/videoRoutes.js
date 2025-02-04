const express = require("express");
const multer = require("multer");
const Video = require("../models/Video");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("video"), async (req, res) => {
    try {
        const { playerId } = req.body;

        const newVideo = new Video({
            playerId,
            url: "dummy_url_for_now",
            processedData: {}
        });
        await newVideo.save();

        res.json({ message: "Video uploaded!", data: newVideo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

