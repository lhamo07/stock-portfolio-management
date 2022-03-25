import './components/AddStock.css';
import AddStock from './components/AddStock';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const Logo = styled.h1`
align-items:center;
font-weight:bold;
color:white;
height:60px;
background-color:teal;
padding :10px 20px;
display:flex;
justify-content:space-between;

`;
const MenuItems = styled.div`
font-size:14px;
cursor:pointer;
margin-Left:25px;
color:white;


`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;




function App() {
  return (

    <div>

      <Router>

        <Logo>Portfolio Management System

          <Right>
            <MenuItems ><Link to="/AddStock" style={{ color: '#FFF' }}>ADD STOCK</Link></MenuItems>
            <MenuItems><Link to="/Dashboard" style={{ color: '#FFF' }}>DASHBOARD</Link></MenuItems>

          </Right>

        </Logo>
        <Routes>
          <Route exact path='/AddStock' element={< AddStock />}></Route>
          <Route exact path='/Dashboard' element={< Dashboard />}></Route>
        </Routes>


      </Router>


    </div>
  );
}

export default App;
