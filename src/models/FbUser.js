import mongoose from 'mongoose';

const FbUserSchema = new mongoose.Schema({
  name: string,
  email: string,
  id: Number,
  accessToken: string,
  userID: string,
  expiresIn: Number,
  signedRequest: string,
  graphDomain: string,
  data_access_expiration_time: Number,
  picture: {
    data: {
      height: Number,
      is_silhouette: Boolean,
      url: string,
      width: Number,
    },
  },
});

module.exports = mongoose.models.FbUser || mongoose.model('FbUser', FbUserSchema);
