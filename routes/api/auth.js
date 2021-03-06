const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User Model
const User = require('../../models/User');
const Donor = require('../../models/Donor');


//@routes POST api/auth
//@desc Autentification user
//@acceSs Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }


    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User Does not exists ' });
            //Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentioals' });

                    jwt.sign(
                        { _id: user._id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    _id: user._id,
                                    name: user.name,
                                    phone:user.phone,
                                    address:user.address,
                                    email: user.email,
                                    donors_list: user.donors_list,
                                    role: user.role
                                }
                            });
                        }
                    )
                })
        })
});

//@routes GET api/auth/user
//@desc Get user data 
//@acceSs Private
router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
        .select('-password')
        .then(user => {
            if(user){
                res.status(200).json(user)
            }else{
                res.status(404).json({
                    status:'failed'
                })
            }
        });
});


module.exports = router;