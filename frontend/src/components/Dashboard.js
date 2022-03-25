import React from 'react'
import ListOfStock from './ListOfStock';
      
  const stocklist = [{
    id:1,
    stockName: 'Standard Charted Bank',
    totalUnit: 100,
    soldAmount: 5000,
    currentAmount: 50000,
    overallProfit:87744,
  },
  {
    id:2,
    stockName: 'Nepal Investment Bank',
    totalUnit: 100,
    soldAmount: 5000,
    currentAmount: 50000,
    overallProfit:87744,

  },
  ];

const Dashboard = () => {
  return (
    <div>
    <h1>Dashboard</h1>
    <ListOfStock  
      stockName={stocklist[0].stockName}
      totalUnit={stocklist[0].totalUnit}
      soldAmount={stocklist[0].soldAmount}
      currentAmount={stocklist[0].currentAmount}
      overallProfit={stocklist[0].overallProfit}/>

     
      <ListOfStock
      stockName={stocklist[1].stockName}
      totalUnit={stocklist[1].totalUnit}
      soldAmount={stocklist[1].soldAmount}
      currentAmount={stocklist[1].currentAmount}
      overallProfit={stocklist[1].overallProfit}

      />
    
    
     </div>
  )
}
export default Dashboard