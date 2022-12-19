const usersRoutes = require('./user_routes');

module.exports = function(app, db){
    usersRoutes(app, db)
}