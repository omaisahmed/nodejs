var mysql=require('mysql');
connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mydb'
});

connection.connect(function(err){
if(err) throw err;
var sql="select * from customers limit 1";
connection.query(sql,function(err,result){
console.log(result);
});
});