
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Context + Form Digital',
  	message: 'Coming Soon! Sign Up Now and Receive Updates On Our Launch!' 
  });
};