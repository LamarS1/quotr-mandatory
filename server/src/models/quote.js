import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  source: String,
  user: String,
  likes: Number,
  id: Number,
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
