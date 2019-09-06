var connPool = require('./connectionpool.js');

module.exports = {
    testConn: function(req, res){
        connPool('SELECT * from user where ?', {id: '1'}, function(err, rows) {
            if(err){
                sails.log.debug(err);  //log message or some data at debug level
            }else{
                console.log(rows);
            }        
        });         
    }
};