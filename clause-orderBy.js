var mysql=require('mysql');
connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mydb'
});

connection.connect(function(err){
if(err) throw err;
connection.query("select * from customers order by name", function(err,result){
if(err) throw err;
console.log(result);
});
});