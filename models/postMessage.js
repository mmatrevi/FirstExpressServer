import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  creator: String,
  firstname: String,
  surname: String,
  rank: String,
  branch: String, 
  center: String,
  ministry: String,
  reportingTo: String,
  email: String,
  phone: Number,
  birthday: String,
  address: String,
  notes: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("Members", postSchema);

export default PostMessage;
