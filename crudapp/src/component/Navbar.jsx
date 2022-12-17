import React from 'react'
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
   background : rgb(35, 168, 212);
`;

const Tabs = styled(NavLink)`
   font-size : 25px;
   margin-right : 40px;
   color : #fff;
   text-decoration : none;
`;

const Navbar = () => {
  return (
    <> 
    <Header position='static' >
        <Toolbar style={{display: 'flex', justifyContent: "space-between",  margin: "0px 30px 0px 30px"}} >
            <Tabs to = '/'>Crud App</Tabs>
            <div style={{display: 'flex'}} >
              <Tabs  to = '/all'>AllUser</Tabs>
              <Tabs  to = '/add'>AddUser</Tabs>
            </div>
        </Toolbar>
    </Header>
    </>
  )
}

export default Navbar