export function validateAuth(req, res, next) {
  let payload = req.body;

  if (!payload.username || !payload.password || !payload.card_no) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
}