import { validateObj, validateUser, validateAuthUser } from './utilities/utility.js'

///Validate Object
const validationObj = (req, res, next) => {

  let err = validateObj(req.body)

  if (err.length !== 0) return res.status(400).json({message: "validation error", invalid: err})

  next()
}

//Validate User
const validationUser = (req, res, next) => {

  let err = validateUser(req.body)
  
  if (err.length !== 0) return res.status(400).json({message: "validation error", invalid: err})
  
  next()
}

//Validate Auth User Data
const validationAuthUser = (req, res, next) => {
  
  let err = validateAuthUser(req.body)

  if (err.length !== 0) return res.status(400).json({message: "validation error", invalid: err})

  next()
}

export { validationObj, validationUser, validationAuthUser }