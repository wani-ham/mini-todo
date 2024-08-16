const { Users }  = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

const saltRounds = 10

const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw) 
}

// register
exports.postUser = async (req, res) => {
    try {
        const {user_id, user_pw, user_name} = req.body;
        const hashedPw = bcrypt.hashSync(user_pw, saltRounds);  // hash password
        // create user
        const newUser = await Users.create({
            user_id,
            user_name,
            user_pw: hashedPw
        })
        res.json({flag: true, newUser});
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// delete user
exports.deleteUser = async (req, res) => {
    try {
        const {user_id} = req.body;
        const isDeleted = await Users.destroy({
            where: {
                user_id
            }
        });
        if (isDeleted) {
            // session destroy
            //
            //
            //
        }
        res.json({flag: true})
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.postLogin = async (req, res) => {
    try {
        const {user_id, user_pw} = req.body;
        const user = await Users.findOne({
            where: {
                user_id
            }, attributes: ['user_pw', 'user_name']
        });
        if(!user) {
            return res.status(401).json({
                flag: false, 
                msg: "ID does not exists"
            });
        }

        const isPwCorrect = bcrypt.compareSync(user_pw, user.user_pw);
        if(!isPwCorrect) {
            return res.status(401).json({
                flag: false,
                msg: "PW is not correct"
            });
        } else {
            // create jwt token 
            // session
            // 
            //
        }
        res.json({flag: true, user_name: user.user_name})

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}



