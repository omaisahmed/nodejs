var mysql=require('mysql');
connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mydb'
});

connection.connect(function(err){
if(err) throw err;
var sql="delete from customers where name='Company Inc'";
connection.query(sql,function(err,result){
console.log("Record Deleted Succesfully!"+result.affectedRows);
});
});