export function validateCustomer(req, res, next) {
  let payload = req.body;

  if (!payload.id) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
};

export function validateCIFCustomer(req, res, next) {
  let payload = req.body;

  if(!payload.cifNo) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
}