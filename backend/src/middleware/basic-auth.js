import User from '../model/user.js';
import createError from 'http-errors';

export default (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization)
    return next(createError(400, 'AUTH ERROR: no authorization header'));

  let encoded = authorization.split('Basic ')[1];
  if (!encoded) return next(createError(400, 'AUTH ERROR: not basic auth'));

  let decoded = new Buffer(encoded, 'base64').toString();
  let [username, password] = decoded.split(':');
  if (!username || !password)
    return next(createError(401, 'AUTH ERROR: username or password missing'));

  User.findOne({ username })
    .then(user => {
      if (!user) throw createError(401, 'AUTH ERROR: user not found');
      return user.passwordCompare(password);
    })
    .then(user => {
      req.user = user;
      next();
    })
    .catch(next);
};
