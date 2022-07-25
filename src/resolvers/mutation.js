const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {
    AuthenticationError,
    ForbiddenError
} = require('apollo-server-express');
require('dotenv').config();
const gravatar = require('../util/gravatar');

module.exports = {
        signUp: async(parent, {username, email, password}, {models}) => {
            //normalize email address
            email = email.trim().toLowerCase();
            //hash the password
            const hashed = await bcrypt.hash(password, 10);
            //create gravatar url
            const avatar = gravatar(email);
            try {
                const user = await models.User.create({
                    username,
                    email,
                    password: hashed
                });
                //create and return json web token
                return jwt.sign({id: user._id}, process.env.JWT_SECRET);
            } catch(err) {
                console.log(err);
                //if problem creating account, throw an error
                throw new Error('Error creating account');
            }
        },
        signIn: async(parent, {username, email, password}, {models}) => {
            if (email) {
                //normalize email address
                email = email.trim().toLowerCase();
            }
            const user = await models.User.findOne({
                //find EITHER email OR username
                $or: [{email}, {username}]
            });
            //if no user found, throw error
            if (!user) {
                throw new AuthenticationError('Error Signing In');
            }
            //if the password doesnt match, throw error
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new AuthenticationError('Error Signing In');
            }
            //create and return json web token
            return jwt.sign({id: user._id}, process.env.JWT_SECRET);
        },
}