const express = require('express');
const router = express.Router();

router.get('/', global.secure(), function(request, response){
  console.log('user logged out')
  request.logout();
  request.session.destroy();
  response.redirect('/');  
});

module.exports = router;