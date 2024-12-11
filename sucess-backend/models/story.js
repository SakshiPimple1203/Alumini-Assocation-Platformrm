import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const StoryModel = mongoose.model('Story', StorySchema);
export default StoryModel;
