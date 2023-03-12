var mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/newkart", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected!"));

// var db = require("./model");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

// db.once('once', function () {
//   console.log("we are connected bro/sis ")
// });

var schema = mongoose.Schema;
var productschema = new schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  // order: {
  //   type: schema.Types.ObjectId,
  //   ref: "Order",
  // },
});

productschema.methods.speak = function speak() {
  var greeting = "my name is " + this.name;
  console.log(greeting);
};

var Product = mongoose.model("Product", productschema);

var pratik = new Product({ name: "pratik", brand: "adidas" });
// console.log(pratik.name);
// console.log(pratik.brand);
// pratik.speak();
pratik.save();

Product.find({});
