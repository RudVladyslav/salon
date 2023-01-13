import React, {createContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Route, Routes, Link} from 'react-router-dom';
import {AppContext} from './index';
import appConstants from './utils/consts';
import {adminsPath, clientsPath, publicPath, workersPath} from './utils/routes';
import {decodeToken} from 'react-jwt';
import consts from './utils/consts';

function App() {
const [user, setUser] = useState(consts.NONE)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const {role} = decodeToken(token);
      setUser(role)
    }
  }, []);

  return (
      <AppContext.Provider value={{
        user: user,
        changeUser: setUser,
      }}>
        <div>
          <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
              <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to="/">
                  <Typography variant="h6" component="div">
                    Перукарня
                  </Typography>
                </Link>
                <Box>
                  {user === appConstants.CLIENT &&
                      clientsPath.map(({path, title}) => (
                              <Link key={path} to={path}>
                                <Button color="inherit">
                                  {title}
                                </Button>
                              </Link>
                          ),
                      )}
                  {user === appConstants.NONE &&
                      publicPath.map(({path, title}) => (
                              <Link key={path} to={path}>
                                <Button color="inherit">
                                  {title}
                                </Button>
                              </Link>
                          ),
                      )
                  }
                  {user === appConstants.WORKER &&
                      workersPath.map(({path, title}) => (
                              <Link key={path} to={path}>
                                <Button color="inherit">
                                  {title}
                                </Button>
                              </Link>
                          ),
                      )
                  }
                  {user === appConstants.ADMIN &&
                      adminsPath.map(({path, title}) => (
                              <Link key={path} to={path}>
                                <Button color="inherit">
                                  {title}
                                </Button>
                              </Link>
                          ),
                      )
                  }
                  {user !== appConstants.NONE && (
                      <Button color="inherit" onClick={() => {
                        setUser(consts.NONE);
                        localStorage.removeItem('token')
                      }}>
                        Вийти
                      </Button>
                  )}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>

          <Routes>
            {user === appConstants.ADMIN &&
                adminsPath.map(({path, Component}) => (
                        <Route path={path} key={path} element={<Component/>}/>
                    ),
                )
            }
            {user === appConstants.WORKER &&
                workersPath.map(({path, Component}) => (
                        <Route path={path} key={path} element={<Component/>}/>
                    ),
                )
            }
            {user === appConstants.CLIENT &&
                clientsPath.map(({path, Component}) => (
                        <Route path={path} key={path} element={<Component/>}/>
                    ),
                )
            }
            {user === appConstants.NONE &&
                publicPath.map(({path, Component}) => (
                        <Route path={path} key={path} element={<Component/>}/>
                    ),
                )
            }

          </Routes>
        </div>
      </AppContext.Provider>
  );
}

export default App;
