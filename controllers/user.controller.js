const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

function signUp(req, res, next) {

    models.User.findOne({where: {email: req.body.email}, limit: 1}).then(user => {
        if(user){
            return res.status(409).json({
                message: "The email already exists"
            });
        }else{
            bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), null, (err, hash) => {
                console.log(err)
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                }else{
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password:hash,
                        phone: req.body.phone,
                    };

                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: 'User Created Successfully',
                            user: result
                        });
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json({
                            message: 'Something Went Wrong',
                            error: error
                        });
                    });
                }
            });
        }
    });
}



function login(req, res, next){
    models.User.findOne({where: {email: req.body.email}, limit: 1}).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                console.log(err, result);
                if(result){

                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId:user.id,
                            userLevel:user.level,
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );

                    return res.status(200).json({
                        message: 'Authentication successful',
                        token:token
                    });
                }else{
                    return  res.status(401).json({
                        message: 'Authentication failed',
                    });
                }
            })
        }else{
            res.status(401).json({
                message: 'Authentication failed',
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Something Went Wrong',
            error: err
        });
    });
}





module.exports = {
    signUp: signUp,
    login: login
}
