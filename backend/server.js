import express, { json } from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import serverResponse from "./utils/serverResponse.js";
import productAllowedUpdates from "./constants/allowedUpdate.js"
import * as dotenv from "dotenv";
dotenv.config();

const { Schema, model, connect } = mongoose;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(json());
// app.use(express.static("client/build"))

//MODELS
const productSchema = new Schema({
  title: { type: "string", required: true },
  image: { type: "string", required: true },
  category: { type: "string", required: true },
  price: { type: "number", required: true },
  description: { type: "string", required: true },
  // user: { type: Schema.Types.objectId, ref: User },
});

// const userSchema = new mongoose.Schema({
//   firstname: {type: "string", required: true},
//   lastname: {type: "string", required: true},
//   age: {type: "number", required: true},
//   email: {type: "string", required: true},
//   profilepic: {type: "string", required: true},
// });
// const User = mongoose.model("User", userSchema);

const Product = model("Product", productSchema);

//ROUTES

app.get("/api/products", async (req, res) => {
  try {
    const allProducts = Product.find({});
    return serverResponse(res, 200, allProducts);
  } catch (err) {
    return serverResponse(res, 500, {
      message: "internal error occured " + err,
    });
  }
});
app.get("/api/product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({ _id: productId });
    return serverResponse(res, 200, product);
  } catch (err) {
    return serverResponse(res, 500, {
      message: "product not found error occured " + err,
    });
  }
});

app.get("/api/products/:category", async (req,res)=> {
  try{
      const category = req.params.category
      const product = await Product.find({category})
      return serverResponse(res, 200, product)
  } catch(err){
      return serverResponse(res, 500, {message: "internal error occured" + err})
  }
})

app.post("/api/products", async (req, res) => {
  try{
      const product = new Product({...req.body})
      await product.save()
      return serverResponse(res, 200, product)
  } catch(e){
      return serverResponse(res, 500, {message: "internal error occured" + e})
  }
})

app.delete("/api/product/:productId", async (req,res)=> {
  try{
      const productId = req.params.productId
      const product = await Product.findOneAndDelete({_id: productId})
      return serverResponse(res, 200, product)
  } catch(e){
      return serverResponse(res, 500, {message: "internal error occured" + e})
  }
})

app.put("/api/product/:productId", async (req,res) => {
  const productId = req.params.productId

      const updates = Object.keys(req.body);
      const isValidOperation = updates.every((update) =>
      productAllowedUpdates.includes(update)
      );
    
      if (!isValidOperation) {
        return serverResponse(res, 400, { message: "Invalid updates" });
      }
    
      try {
          const product = await Product.findOne({_id: productId})
        if (!product) {
          return serverResponse(res, 404, { message: "product does not exist" });
        }
        updates.forEach((update) => (product[update] = req.body[update]));
        await product.save();
        return serverResponse(res, 200, product);
      } catch (err) {
        return serverResponse(res, 500, {
          message: "Internal error while trying to update user",
        });
      }
})

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!!");
});
