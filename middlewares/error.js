const handleValidationError = (err, res) => {
    let errors = Object.values(err.errors).map((el) => el.message);
    if (errors.length > 1) {
      let chain = "";
      for (let i = 0; i < errors.length; i++) {
        chain += errors[i] + " || ";
      }
      const string = chain.slice(0, -4);
      res.status(400).send({ msg: string });
    } else {
      res.status(400).send({ msg: errors });
    }
  };
  
  const typeError = (err, req, res, next) => {
    if (err.name === "ValidationError")
      return (err = handleValidationError(err, res));
    else if (err.code === 11000) {
      res.status(400).send({msg:"El correo tiene que ser único"});
    } else {
      res.status(500).send(`Hay un problema`);
    }
  };
  
  module.exports = { typeError };