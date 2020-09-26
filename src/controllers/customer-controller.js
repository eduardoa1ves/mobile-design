const repository = require("../repositories/customer-repository") 

exports.post = async (req, res) => {
  try {
    await repository.post({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).send({message: "OK"})
  } catch (error) {
    res.status(500).send({ message: "Erro" })
  }
}

exports.getAll = async (req, res) => {
  try {
    const response = await repository.get();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({error: error });
  }
}

exports.getById = async (req, res) => {
  try {
    const response = await repository.getById(req.params.customerId);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

exports.put = async (req, res) => {
  try {
    const response = await repository.put(req.params.customerId,req.body);
    res.status(200).send({
      message: "OK",
      data: response
    })  
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.delete = async (req, res) => {
  try {
    await repository.delete(req.params.customerId);
    res.status(200).send({
      message: "OK"
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
};
