import React, {useEffect, useState} from 'react';
import {Card, Container, Typography} from '@mui/material';
import {fetchDeleteVacancy, fetchGetVacancy} from '../http/fetchMethods';
import {AppContext} from '../index';
import Button from '@mui/material/Button';
import {toast} from 'react-toastify';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const {user} = React.useContext(AppContext);

  const loadAllVacancies = async () => {
    try {
      const data = await fetchGetVacancy();
      setVacancies(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const onCLickDeleteVacancy = async (id) => {
    try {
      const {message} = await fetchDeleteVacancy(id);
      toast(message);
      loadAllVacancies()
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadAllVacancies();
  }, []);

  return (
      <div>
        <Container sx={{marginTop: 3}}>
          {vacancies.map(rev => (
                  <>
                    <Card sx={{padding: 2, marginTop: 1}}>
                      <Typography variant="h5">
                        {rev.title}
                      </Typography>
                      <Typography variant="h6" component={'div'}>
                        {rev.description}
                      </Typography>
                    </Card>
                    {
                        user === 'ADMIN' && (
                            <Button
                                style={{maxWidth: '150px', marginTop: '20px'}}
                                onClick={() => onCLickDeleteVacancy(rev.id)}
                                size="small"
                                variant="contained"
                                fullWidth
                            >
                              Видалити
                            </Button>
                        )
                    }

                  </>
              ),
          )}
        </Container>
      </div>
  );
};

export default Vacancies;
