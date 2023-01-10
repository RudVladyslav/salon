import React, {createContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {AppContext} from './index';
import appConstants from './consts';

function App() {
  const {user} = React.useContext(AppContext);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
      <div>
        <Box sx={{flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box sx={{display: 'flex'}}>
                <Typography variant="h6" component="div">
                  Перукарня
                </Typography>
                <Button color="inherit" sx={{marginLeft: 5}}>
                  <Link>
                    Відгуки
                  </Link>
                </Button>
                {user === appConstants.CLIENT && (
                    <Button color="inherit">
                      <Link>
                        Запис
                      </Link>
                    </Button>
                )}
              </Box>
              <Box sx={{display: 'flex'}}>
                {
                    user === appConstants.NONE && (
                        <>
                          <Button color="secondary">
                            <Link>
                              Увійти
                            </Link>
                          </Button>
                          <Button color="secondary">
                            <Link>
                              Реєстрація
                            </Link>
                          </Button>
                        </>
                    )
                }
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
  );
}

export default App;
