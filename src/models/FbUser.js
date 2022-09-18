import mongoose from 'mongoose';

const FbUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  id: Number,
  accessToken: String,
  userID: String,
  expiresIn: Number,
  signedRequest: String,
  graphDomain: String,
  data_access_expiration_time: Number,
  picture: {
    data: {
      height: Number,
      is_silhouette: Boolean,
      url: String,
      width: Number,
    },
  },
});

module.exports = mongoose.models.FbUser || mongoose.model('FbUser', FbUserSchema);
