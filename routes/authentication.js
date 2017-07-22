const User = require('../models/user'); // Import User Model Schema

module.exports = (router)=>{
    
    router.post('/register', (req, res)=>{
        console.log('req is '+req);
        if (!req.body.email) {
            res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
        } else{
            // Check if username was provided
            if (!req.body.username) {
              res.json({ success: false, message: 'You must provide a username' }); // Return error
            }else{
                if (!req.body.password) {
                    res.json({ success: false, message: 'You must provide a password' }); // Return error
                } else{
                     // Create new user object and apply user input
                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    });
                    
                    user.save((err)=>{
                        if(err){
                            res.json({ success: false, message: 'User is not added ' ,err}); // Return error
                        }
                    });
                }
            }
        }
        
    });
    return router;
};