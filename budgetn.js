var express = require('express');
var router = express.Router();
var passport = require('passport');
var pg = require('pg'); // var pg = require)'pg') for Local database users:
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cover',{error: req.flash('error')});
});

router.post('/',
  // depends on the fiels "isAdmin", redirect to the different path: admin or notAdmin
  passport.authenticate('local', { failureRedirect: '/LogIn', failureFlash:true }),
  function(req, res,next) {
    // res.json(req.user);
    // res.redirect('/users/profile')

     console.log(req.user);
    if (req.user.isadmin == 'admin'){
      res.redirect('/exam/admin');
    }
    else {
      res.redirect('/exam/notAdmin');
    }
});

//////////////////////////////////////////////////////////

router.get('/LogIn', function(req, res){
    res.render('LogIn',{user: req.user});
});

///////////////////////////////////////////////////////////

router.get('/SignUp', function(req, res){
    res.render('SignUp',{user: req.user});
});

///////////////////////////////////////////////////////////

router.get('/about', function(req, res){
    res.render('about',{user: req.user});
});

///////////////////////////////////////////////////////////
// check if username has spaces, DB will whine about that
function validUsername(username) {
  var login = username.trim(); // remove spaces
  return login !== '' && login.search(/ /) < 0;
}

function encryptPWD(password){
    var salt = bcrypt.genSaltSync(10);
    //console.log("hash passwords");
    return bcrypt.hashSync(password, salt);
}

///////////////////////////////////////////////////////////
function createUser(req, res, client, done, next){
  console.log("create account");
  var pwd = encryptPWD(req.body.password);
  var select = 'Student';
  if (req.body.Student) {
    select = 'Student';
    client.query('INSERT INTO examusers (username, password) VALUES($1, $2)', [req.body.username, pwd,'student'], function(err, result) {
      done(); // done all queries
      if (err) {
        console.log("unable to query INSERT");
        return next(err); // throw error to error.hbs. only for test purpose
      }});
  }else {
    select = 'Admin';
    client.query('INSERT INTO examusers (username, password, isadmin) VALUES($1, $2, $3)', [req.body.username, pwd,'admin'], function(err, result) {
      done(); // done all queries
    console.log("User creation is successful");
    res.render('examSignup', { success: "true" });
  });
}
}

module.exports = router;
