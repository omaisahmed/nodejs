var mysql=require('mysql');
connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mydb'
});

connection.connect(function(err){
if(err) throw err;
var sql="update customers set name='saad' where name='ali'";
connection.query(sql,function(err,result){
console.log("Record Updated Succesfully!"+result.affectedRows);
});
});