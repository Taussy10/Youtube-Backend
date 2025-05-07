import mongoose, { Types } from "mongoose";
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
    // _id i
    id: {
      // attribute in mongoose for uniquely identifying every schema
      // objectId is 12 byte unique value
      // what is byte ? 8*12 = 96 letter can be written

      // if key required only type then just write
      // id: String : no need to open in curly braces
      type: Schema.Types.ObjectId,
      requried: true,
    },
    channelName: {
      type: String,
      requried: true,
    },
    email: {
      type: String,
      unique: true,
      requried: true,
    },
    phone: {
      //   type: Number,
      // he wrote number that's why chose it
      type: String,
      requried: true,
    },
    password: {
      type: String,
      requried: true,
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
        default: 0,
      },
    ],
  },
  { Timestamp: true }
);

export const userModel = mongoose.model("User", userSchema);
