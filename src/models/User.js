import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
