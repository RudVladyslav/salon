import React, {createContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Route, Routes, Link} from 'react-router-dom';
import {AppContext} from './index';
import appConstants from './consts';
import {adminsPath, clientsPath, publicPath, workersPath} from './routes';

function App() {
  const {user} = React.useContext(AppContext);

  return (
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
                            <Link to={path}>
                              <Button color="inherit" key={path}>
                                {title}
                              </Button>
                            </Link>
                        ),
                    )}
                {user === appConstants.NONE &&
                    publicPath.map(({path, title}) => (
                            <Link to={path}>
                              <Button color="inherit" key={path}>
                                {title}
                              </Button>
                            </Link>
                        ),
                    )
                }
                {user === appConstants.WORKER &&
                    workersPath.map(({path, title}) => (
                            <Link to={path}>
                              <Button color="inherit" key={path}>
                                {title}
                              </Button>
                            </Link>
                        ),
                    )
                }
                {user === appConstants.ADMIN &&
                    adminsPath.map(({path, title}) => (
                            <Link to={path}>
                              <Button color="inherit" key={path}>
                                {title}
                              </Button>
                            </Link>
                        ),
                    )
                }
                {user !== appConstants.NONE && (
                    <Button color="inherit">
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
                      <Route path={path} element={<Component/>}/>
                  ),
              )
          }
          {user === appConstants.WORKER &&
              workersPath.map(({path, Component}) => (
                      <Route path={path} element={<Component/>}/>
                  ),
              )
          }
          {user === appConstants.CLIENT &&
              clientsPath.map(({path, Component}) => (
                      <Route path={path} element={<Component/>}/>
                  ),
              )
          }
          {user === appConstants.NONE &&
              publicPath.map(({path, Component}) => (
                      <Route path={path} element={<Component/>}/>
                  ),
              )
          }

        </Routes>

      </div>
  );
}

export default App;
