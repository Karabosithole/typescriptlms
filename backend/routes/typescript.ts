import express from 'express';
import ChapterProgress from '../models/ChapterProgress';

const router = express.Router();

router.post('/submit', async (req, res) => {
    const { userId, score } = req.body;

    try {
        const progress = await ChapterProgress.findOneAndUpdate(
            { userId, chapter: "Chapter-1" },
            { score, completed: true },
            { upsert: true, new: true }
        );

        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: "Error saving progress" });
    }
});

export default router;