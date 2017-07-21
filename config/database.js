
const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
    uri : 'mongodb://localhost:27017/' + this.db ,
    secret : crypto,
    db : 'mean-angular'
    
};

/*/*
 *mongodb://Umesh:<PASSWORD>@cluster0-shard-00-00-vo5kr.mongodb.net:27017,cluster0-shard-00-01-vo5kr.mongodb.net:27017,cluster0-shard-00-02-vo5kr.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin 
 **/ 
