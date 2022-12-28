const verifyBodyFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'The fields email and password are requireds' });

  next();
};

module.exports = {
  verifyBodyFields,
};
