const express = require("express");
const Player = require("../models/Player");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const player = await Player.findById(req.params.id).populate("uploadedVideos");
        if (!player) return res.status(404).json({ message: "Player not found" });
        res.json(player);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

