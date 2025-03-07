import mongoose from 'mongoose';

const ChapterProgressSchema = new mongoose.Schema({
 userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 chapter: { type: String, required: true },
 score: { type: Number, required: true },
 completed: { type: Boolean, default: false }
});

export default mongoose.model('ChapterProgress', ChapterProgressSchema);

