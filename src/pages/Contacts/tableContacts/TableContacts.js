import  format  from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';


const TableContacts = ({ data }) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="contacts table">
      <TableHead>
        <TableRow>
          <TableCell>Avatar</TableCell>
          <TableCell>Full name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Nationality</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((contact) => (
          <TableRow
            key={contact.login.uuid}>
              {/* Contacts: {data[0].name.first} */}
            <TableCell>
            <Avatar alt='' src={contact.picture.thumbnail} />
            </TableCell>
            <TableCell>{contact.title} {contact.name.first} {contact.name.last}</TableCell>
            
            <TableCell>

            <Typography>
                {format(parseISO(contact.dob.date), "MM/dd/yyyy")}
                </Typography>
            <Typography>
                {contact.dob.age} years
                </Typography>
            
            </TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.location.country}</TableCell>
            <TableCell>{contact.location.city},{contact.location.street.name}{" "}{contact.location.street.number}</TableCell>
            <TableCell>7</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
};

export default TableContacts;

