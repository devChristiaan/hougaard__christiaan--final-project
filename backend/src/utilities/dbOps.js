//Basic Module Imports
import {promises as fs} from 'fs'
import path from 'path'

//Config local env
import dotenv from 'dotenv'
dotenv.config()

//Define DB locations
const dbEntries = path.resolve(process.env.DB_ENTRIES_LOCATION)
const dbUsers = path.resolve(process.env.DB_USERS_LOCATION)

//Evalute db
const chooseDB = (dataBase) => {
  let db = eval(dataBase)
  return db
}

//Write function for persiting data
const write = async (data, file) => {
  let database = chooseDB(file)
  await fs.writeFile(database, JSON.stringify(data))
}

//Get all Entries From dbEntries
const getAll = async (db) => {

  let database = chooseDB(db)
  let emptyArr = []

  try {
  let data = await fs.readFile(database, 'utf-8')
  return JSON.parse(data)
  } catch (err) {
    await write(emptyArr, db)
    return true
  } finally {
    let data = await fs.readFile(database, 'utf-8')
    return JSON.parse(data)
    }
  }

//Add item to DB
const add = async (data, file) => {
  try {
    let content = await getAll(file)
    content.push(data)
    await write(content, file)
  } catch (err) {
    throw err
  }
}

export { getAll, add }