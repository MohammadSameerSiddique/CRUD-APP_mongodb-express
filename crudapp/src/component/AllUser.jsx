import  { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, styled, Button } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)` 
    & > th {
        font-size: 20px;
        background: #423e3e;
        // background : rgb(35, 168, 212);
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const editUser = () => {
        alert("U went to Edit user!")
    };

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers(); 
        alert("Are u Sure to Delete user!");
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                          <Button variant = 'contained' style = {{ marginRight: 20 }} onClick= {() => editUser()} component = {Link} to= {`/edit/${user._id}`}>Edit</Button>
                          <Button variant = 'contained' color = 'secondary' onClick= {() => deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;