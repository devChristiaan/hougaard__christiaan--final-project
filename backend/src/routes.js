//Default app imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
const router = express.Router()

//DB Operations import
import { getAll, add } from './utilities/dbOps.js'

//Import Middleware
import { validationObj, validationUser, validationAuthUser } from './validation.js'
import jwtverifiy from './jwtVerify.js'

//Import Utilities
import { createID, findUser, findContactFormEntry } from './utilities/utility.js'

//Config local env
import dotenv from 'dotenv'
dotenv.config()

//Retrieve Salt Rounds from ENV
const saltRounds = parseInt(process.env.SALT_ROUNDS)

//Create entry when user submits Contact From
router.post('/contact_form/entries', validationObj , async (req, res, next) => {
  //Create ID
  let message = createID(req.body)
  //Designate which DB to use
  let db = 'dbEntries'
  try{
    //Appended request to Contact From DB
    await add(message, db)
    //Success message
    return res.status(201).json(message)
  } catch (err){
    throw next(err)
  }
})

//Create New User
router.post('/users', validationUser, async (req, res, next) => {
  //Create ID
  let user = createID(req.body)
  //Designate which DB to use
  let db = 'dbUsers'
  try{
    //Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    //Append hashed Password
    user.password = hashedPassword
    //Appended New User to DB
    await add(user, db)
    //Removes password before returning obj
    delete user.password
    //Success message
    return res.status(201).json(user)
  } catch (err){
    throw next(err)
  }
})

//Authenticate and log user
router.post('/auth', validationAuthUser , async (req, res, next) =>{
  ///Define given User
  const email = req.body.email
  const password = req.body.password
  //Designate which DB to use
  const db = 'dbUsers'
  try{
    ///Find User in DB
    let user = await findUser(email, password, db)
    ///If successful Append Token
    if (user === false) {
      //User not found - Credentials Incorrect
      return res.status(400).json({message: "incorrect credentials provided"})
    } else {
      //User Authenticated - Send Token
      const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '10m'})
      return res.status(200).json({token})
   }
  } 
  catch (err){
    throw next(err)
  }
})

//Verify that all requests contain valid token
router.use(jwtverifiy)

// Get listing when user is authenticated
router.get('/contact_form/entries', async (req, res, next) => {
  //Designate which DB to use
  let db = 'dbEntries'

  try{
    //Retrieve Data from DB
    const data = await getAll(db)
    //Return data to client
    return res.status(200).json(data)
  } 
  catch (err){
    throw next(err)
  }
})

// Get specific entry with given ID
router.get('/contact_form/entries/:id', async (req, res, next) => {
  const id = req.params.id
  //Designate which DB to use
  let db = 'dbEntries'

  try {
    //Find Entry in DB
    let entry = await findContactFormEntry(id, db)

    //Check if Entry was Found
    if (!entry) {
      return res.status(404).json({message: `entry ${id} not found`})
    } else {
      return res.status(200).json(entry)
    }
  } catch (err) {
    throw next(err)
  }
})

export default router