const repository = require("../repositories/product-repository")

exports.post = async (req, res) => {

  const id = req.body.storeId;

  if(!id)
    res.status(500).json({
      message: "ID da loja inválido"
    })

  try {
    await repository.post({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      store = req.body.storeId
    });
    res.status(201).send({message: "Produto cadastrado"})
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Erro"
    })
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await repository.getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro",
      error: error
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.productId;
    const data = await repository.getById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro",
      error: error
    })
  }
};

exports.put = async (req, res) => {
  try {
    const id = req.params.productId;
    const data = await repository.put(id,req.body);
    res.status(200).send({
      message: "Atualizou",
      data: data
    })  
  } catch (error) {
    res.status(500).send({
      message: "Erro",
      error: error
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await repository.delete(req.params.productId);
    res.status(200).send({
      message: "Deletou"
    })
  } catch (error) {
    res.status(500).send({
      message: "Erro",
      error: error
    })
  }
};
