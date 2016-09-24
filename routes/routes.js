/*eslint-env node */
var myGlobalString = '';

var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'echo.jsontest.com',
  path: '/key/value/one/two'
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
    myGlobalString = str;
  });
}

var appRouter = function(app) {
	
    app.get("/", function(req, res) {    

 	return res.send("You came in via root");
    
});	
    
app.get("/account", function(req, res) {
	
		http.request(options, callback).end();
    
        return res.send(myGlobalString);
}); 
    
}
module.exports = appRouter;