const Customer = require("../app/models/customer");

exports.post = async(data) => {
  const customer = new Customer(data);
  await customer.save();
}

exports.get = async () => {
  const customer = await Customer.find();
  return customer;
}

exports.getById = async(id) => {
  const customer = await Customer.findById(id);
  return customer;
}

exports.put = async(id, params) => {
  await Customer.findByIdAndUpdate(id, {
    $set:{
      name: params.name,
      email: params.email,
      password: params.password
    }
  });
}

exports.delete = async(id) => {
  const customer = await Customer.findByIdAndDelete(id);
  return customer;
}