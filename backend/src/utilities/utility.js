//import UUID to create ID's
import { v4 as uuidv4 } from 'uuid'
import { getAll } from './dbOps.js'
import bcrypt from 'bcrypt'

//Create and append ID
function createID (obj) {
  //Create ID
  let id = uuidv4()
  //Append ID to Obj
  obj.id = id
  return obj
}

//Find User in DB
async function findUser (email, password, db) {
  //Get all users from DB
  let dbUsers = await getAll(db)
  //find User
  let foundUser = dbUsers.find((item) => item.email == email)

  //Create condition for not found
  if (foundUser == undefined) {
    return false
  } else {
  ///If Found Test Password 
   try {
    if(await bcrypt.compare(password, foundUser.password)){
      return foundUser} else {
        return false
      }
   } catch (err) {
     throw err
   }
}
}

//Find Contact Form Entry in DB
async function findContactFormEntry (id, db) {
  //Get allEntries from DB
  let dbContactForm = await getAll(db)
  //find specific entry by ID
  let foundEntry = dbContactForm.find(item => item.id == id)

  //Create condition for not found
  if (foundEntry == undefined) {
    return false
  } else {
    return foundEntry
  }
}

//Validate email address || Takes in an object with email property
function validateEmail (mail) {
  return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.email)) ? true : false
}

//Validate Password
function validatePassword (password) {
  let pass = password.split('')

  return (pass.length >= 8) ? true : false
}

///Validate object to test if Keys exists and returns error array if keys are invalid
function validateObj (reqObj) {

  let result = []
  let requiredProperties = ['name', 'email', 'phoneNumber', 'content']

  //Check if Object has required properties
  requiredProperties.forEach( property => {
    if (!reqObj.hasOwnProperty(property)) {
      result.push(property)
    }
  })

  //Check if email given is valid
  if (!result.includes('email')) {
    let email = validateEmail(reqObj)
    if(!email) result.push('email')
  }

  return result
  }

function validateUser (reqUser) {

  let result = []
  let requiredProperties = ['name', 'password', 'email' ]

  //Check if Object has required properties
  requiredProperties.forEach( property => {
    if (!reqUser.hasOwnProperty(property)) {
      result.push(property)
    }
  })

  //Check if email given is valid
  if (!result.includes('email')) {
    let email = validateEmail(reqUser)
    if(!email) result.push('email')
  }

  //Check if password given is valid
  if (!result.includes('password')) {
    let password = validatePassword(reqUser.password)
    if(!password) result.push('password')
  }

  return result
}

function validateAuthUser (reqUser) {
  let result = []
  let requiredProperties = ['password', 'email' ]

  //Check if Object has required properties
  requiredProperties.forEach( property => {
    if (!reqUser.hasOwnProperty(property)) {
      result.push(property)
    }
  })

  //Check if email given is valid
  if (!result.includes('email')) {
    let email = validateEmail(reqUser)
    if(!email) result.push('email')
  }

  //Check if password given is valid
  if (!result.includes('password')) {
    let password = validatePassword(reqUser.password)
    if(!password) result.push('password')
  }

  return result
}


export { validateObj, validateUser, validateAuthUser , createID, findUser, findContactFormEntry }