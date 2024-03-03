import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const RecordsTable = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/records')
            .then(response => setRecords(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Sno</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {records.map(record => (
                    <TableRow key={record.sno}>
                        <TableCell>{record.sno}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.age}</TableCell>
                        <TableCell>{record.phone}</TableCell>
                        <TableCell>{record.location}</TableCell>
                        <TableCell>{record.created_at.split('T')[0]}</TableCell>
                        <TableCell>{record.created_at.split('T')[1]}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default RecordsTable;