const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keyConstants = require('../config/constants.js')



exports.insertUser = async ({name, surname, familyname, email, worktitle, password}, client) => {
    try {
        password = await bcrypt.hash(password, keyConstants.SALT_ROUNDS)
        const query = {
            text: 'INSERT INTO users(name, surname, familyname, email, worktitle, password) VALUES($1, $2, $3, $4, $5, $6) RETURNING id, role',
            values: [name,surname,familyname, email, worktitle, password]
        }
        
        const result  = await client.query(query)
        let userToken = jwt.sign(result.rows[0], keyConstants.JWT_SECRET)
        return {...result.rows[0], token: userToken}
    }catch(err){
        console.log(err)
        throw err
    }
}

exports.retrieveUser = async (email, password, client) => {
    try {
        const query = {
            text: 'SELECT id, role, password FROM users WHERE email = $1',
            values: [email]
        };
        const result = await client.query(query)

        if (result.rows.length === 1) {
            console.log(result.rows)
            let isPassCorrect = await bcrypt.compare(password, result.rows[0].password)
            if(isPassCorrect){
             let userToken = jwt.sign({id: result.rows[0].id, role: result.rows[0].role}, keyConstants.JWT_SECRET)
             return {id: result.rows[0].id, role: result.rows[0].role, token: userToken}
            }else {
                throw `Wrong login information!`
            }
        } else {
            throw `Wrong login information!`
        }
    } catch(err) {
        console.error(err)
        throw err
    }
}

exports.emailExists = async (email, client) => {
    try {
        const data = await client.query("SELECT * FROM users WHERE email=$1", [
            email,
          ]);
          if (data.rowCount == 0) return false; 
          return data.rows[0];
    }catch(err){
        console.log(err)
        throw err
    }
  };

  async function createSessionSecret(username, changeOrNew, client){
    try {
        let secret = await bcrypt.hash(`${Math.random().toString(36).slice(2, 7)}`, keyConstants.SALT_ROUNDS)
       if(changeOrNew === 'change'){
            const query = {
                text: 'UPDATE users SET session_secret = $1 WHERE username = $2 RETURNING session_secret',
                values: [secret, username]
            }
            const result = await client.query(query)
            console.log(result.rows)
            return result.rows[0].session_secret
       }else {
        return secret
       }
    }catch(err){
        console.log(err)
    }
    
  }