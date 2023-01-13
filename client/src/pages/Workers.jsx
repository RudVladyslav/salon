import React, {useEffect, useState} from 'react';
import {fetchGetWorkers} from '../http/fetchMethods';
import {
  Paper, Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Workers = () => {

  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try{
      const data = await fetchGetWorkers()
      setWorkers(data)
      console.log(data);
    }catch (e) {
      console.log(e);
    }
  }

  const onClickDeleteWorker = () => {

  }

  const onClickEditWorker = () => {

  }

  useEffect(() => {
    getWorkers()
  }, [])

  return (
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Призвіще</TableCell>
                <TableCell align="center">Ім'я</TableCell>
                <TableCell align="center">Номер телефону</TableCell>
                <TableCell align="center">Ел. пошта</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workers.map((row) => (
                  <TableRow
                      key={row.name}
                  >
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">
                      <Button variant='outlined' color="error" sx={{ marginRight: 1 }}>
                        <DeleteIcon />
                      </Button>
                      <Button variant='outlined' color="warning">
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default Workers;
