import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Box, MenuItem, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';

const ToOrder = () => {
  const [value, onChange] = useState(new Date());
  const currencies = ['xaxaxaxax', 'ccsbchs', 'chsbbhcs'];
  useEffect(() => {

  }, [value]);

  return (
      <div>
        <Typography sx={{textAlign: 'center', marginTop: 2}} variant="h4"
                    component="h4">
          Записатись на стрижку
        </Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('csnckn');
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 5,
          }}>
            <Calendar onChange={onChange} value={value}/>
            <Box sx={{marginLeft: 10}}>
              <TextField
                  id="outlined-select-currency"
                  select
                  label="Натисніть"
                  defaultValue="EUR"
                  helperText="Оберіть перукаря"
                  sx={{width: '300px'}}
              >
                {currencies.map((option) => (
                    <MenuItem key={option} sx={{color: '#000'}} value={option}>
                      {option}
                    </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 6}}>
            <Button
                color="primary"
                variant="contained"
                type="submit" size="large"
            >
              Записатись!
            </Button>
          </Box>
        </form>
      </div>
  );
};

export default ToOrder;
