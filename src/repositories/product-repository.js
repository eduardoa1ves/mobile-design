const Product = require("../app/models/product");

exports.post = async(data) => {
  const product = new Product(data);
  await product.save();
}

exports.get = async () => {
  const res = await Product.find().populate("stores");
  return res;
}

exports.getById = async(id) => {
  const res = await Product.findById(id).populate("stores");
  return res;
}

exports.put = async(id, data) => {
  await Product.findByIdAndUpdate(id, {
    $set:{
      name: data.name,
      price: data.price,
      description: data.description
    }
  });
}

exports.delete = async(id) => {
  const res = await Product.findByIdAndDelete(id);
  return res;
}