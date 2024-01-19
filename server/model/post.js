const mongoose = require("mongoose")

const Schema = mongoose.Schema;

//embedded schema document

// const authorSchema = new Schema({
//   name:{
//     type:String,
//   },
//   role:{
//     type:String
//   }
// })


const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  // author:authorSchema,
  
});

const Post = mongoose.model("Post", PostSchema)

module.exports = Post;

//reference schema document

// const childSchema = new Schema({ name: "string" });
// const Child = mongoose.model("Child", childSchema);

// const parentSchema = new Schema({
//   child: {
//     type: mongoose.ObjectId,
//     ref: "Child",
//   },
// });
// const Parent = mongoose.model("Parent", parentSchema);

// const doc = await Parent.findOne().populate("child");
// // NOT a subdocument. `doc.child` is a separate top-level document.
// doc.child;