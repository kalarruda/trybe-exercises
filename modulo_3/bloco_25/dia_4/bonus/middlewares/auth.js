module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 3) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  return res.send('porra cara');
}
