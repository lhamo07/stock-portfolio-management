
import React from 'react';
import './ListOfStock.css';



const ListOfStock = (props) => {
  return (
    <div>

      <table className="table-heading">

        <tr>

          <th>Stock Name</th>
          <th>Total Unit</th>
          <th>Sold Amount</th>
          <th>Current Amount</th>
          <th>Overall Profit</th>
        </tr>

        <tr>
          <td>{props.stockName}</td>
          <td>{props.totalUnit}</td>
          <td>{props.soldAmount}</td>
          <td>{props.currentAmount}</td>
          <td>{props.overallProfit}</td>


        </tr>
        <></>

      </table>
      <br/>
    </div>

  )

}

export default ListOfStock