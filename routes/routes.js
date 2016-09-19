/*eslint-env node */
var appRouter = function(app) {
    
app.get("/account", function(req, res) {
    
        return res.send("You came in via Account");
}); 
    
}
module.exports = appRouter;