const db = require('./config/db')
const bodyParser=require['body-parser']
const express=require('express');
const app=express()
const mysql=require['mysql'];
const cors=require('cors')




app.use(cors())
app.use(express.json())
app.post("/api/insert",(req,res)=>{
  const stockName=req.body.stockName
  const quantity=req.body.quantity
  const price=req.body.price
  const status=req.body.status
  const transactionDate=req.body.transactionDate
  const sqlInsert="INSERT INTO stock_portfolio(stockName,stockQuantity,stockPrice,stockStatus,transactionDate)VALUES(?,?,?,?,?)"
  db.query(sqlInsert,[stockName,quantity,price,status,transactionDate],(err,result)=>{
   console.log(err);
   res.send("connection successful");

  });
});

db.query(`select * from stock_portfolio_database.stock_portfolio`,(err,res)=>{
  const result = Object.values(JSON.parse(JSON.stringify(res))); 
   result.forEach((v) => console.log(v));


})





app.listen(3001,()=>{
  console.log("running...")
})



