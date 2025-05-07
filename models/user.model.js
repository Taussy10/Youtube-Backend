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
      // Let's talk about types
      // String ,Number ,Date ,Buffer ,Boolean ,Mixed, ObjectId
      // Array ,Decimal128 ,Map ,Schema ,UUID ,BigInt ,Double, Int32

      // Either you write type like this
      // Short way = type: String
      // or
      // Long way = Schema.Types.String,
// Short way will work for everyone except ObjectId and Mixed 
// so use short way for everything except 2

      type: Schema.Types.String,
      requried: true,
    },
    email: {
      type: String,
      unique: true,
      requried: true,
    },
    id: {
      type: String,
      requried: true,
    },
  },
  { Timestamp: true }
);

// Know connect Scheme to the models
// Model name should be uppercase
export const User = mongoose.model("User", userSchema);
