import React from 'react'
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import './AddStock.css'
import Axios from 'axios'


const AddStock = () => {
    const [stockName, setStockName] = useState('');
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState('')
    const [transactionDate, setTransactionDate] = useState('');

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    const handleDateUpdate = (e) => {
        setTransactionDate(e.target.value);
    }
    const submitData = () => {
        Axios.post('http://localhost:3001/api/insert', {
            stockName: stockName,
            quantity: quantity,
            price: price,
            status: status,
            transactionDate: transactionDate,
        }).then(() => {
            alert("Data inserted successfully");
        });
    };

    return (
        <Card style={{ backgroundColor: "#cbc7c74a", height: "100vh", Weidth: "100%" }}>
            <div className='app'>

                <div className='form1'>

                    <label>Choose Stock Name:</label>
                    <select value={stockName} onChange={(e) => { setStockName(e.target.value) }}>
                        <option disabled selected>
                            Stock Name
                        </option>
                        <option value="Standard Charted Bank" >Standard Charted Bank</option>
                        <option value="Nepal Investment Bank" >Nepal Investment Bank</option>
                        <option vlaue="Machhapuchechera Bank" >Machhapuchchhre Bank</option>
                        <option value="Prabhu Bank" >Prabhu Bank</option>
                        <option value="Nabil Bank" >Nabil Bank</option>
                    </select>
                    <label>Quantity:</label>
                    <input type="text" name="stockQuantity" onChange={(e) => {
                        setPrice(e.target.value)
                    }} />

                    <label>Price:</label>
                    <input type="text" name="stockPrice" onChange={(e) => {
                        setQuantity(e.target.value)
                    }} />
                </div>

                <div className='form2'>
                    <label>Stock Status</label>
                    <input type="radio" value="Buy" name="status" ckecked={status === "Buy"} onChange={handleStatus} /> Buy
                    <input type="radio" value="Sell" name="status" ckecked={status === "Sell"} onChange={handleStatus} /> Sell
                    <label>Transaction Date</label>

                    <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(e) => handleDateUpdate(e)}

                        InputLabelProps={{
                            shrink: true,

                        }}
                    />
                </div>

                <div>
                    <Button variant="primary" onClick={submitData}>Add Stock</Button>
                </div>
                <div>
                <b>sold price:</b>
                                 
                {quantity*price}
               

                </div>
               
            </div>
        </Card>
    )
}

export default AddStock