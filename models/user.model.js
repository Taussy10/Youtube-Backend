import mongoose from "mongoose";
import { Schema } from "mongoose";

// Now create a schema
// defines the shape of the documents within that collection.
// Basically blueprint of data
// Each schema maps to a MongoDB-collection(same as appwrite's Databses's collections)

const userSchema = new Schema(
  {
    // know how to write key names
    // 1. use camelCase

    // _id(id with underscore): by default mongoose adds
    // and we are with that
    //  id is custom and _id is inbuilt so it will be creaetd by mongoose itself
    // it's type is objectId 
    _id: {
      // _id attribute in mongoose for uniquely identifying every schema
      // objectId is 12 byte unique value
      // what is byte ? 8*12 = 96 letter can be written

      // if key required only type then just write
      // id: String : no need to open in curly braces
      // look we are not defineg schem of _id 
      // it will be defined by 
      // that's why not schema
      // type: Schema.Types.ObjectId,
      // it will be mongoose 
      type: mongoose.Types.ObjectId,
      required: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      //   type: Number,
      // he wrote number that's why chose it
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    logoId: {
      type: String,
      required: true,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    //  reference relation
    subscribedChannels: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        // default: 0,
        default: [] // for 0 items we use empty array in defalt not 0 
      },
    ],
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);

export default userModel;
