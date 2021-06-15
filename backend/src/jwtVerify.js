import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  //Capture auth in header
  const authHeader = req.headers["authorization"]

  const token = authHeader && authHeader.split(' ')[1]

  //Check if req contain token
  if(token == null) {
    return res.status(400).send({message: 'token not provided'})
  }
  try {
    //Verify token and add onto req Obj
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.user = data
    next()
  } catch (err) {
    //Notify Client Token expired-Invalid
    return res.status(403).send({message: err.message})
  }

}