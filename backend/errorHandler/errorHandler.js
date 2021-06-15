///Define default Error Handler
export default function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.render('error', { error: err })
}