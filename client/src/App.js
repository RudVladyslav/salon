import Button from '@mui/material/Button';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';

function App() {
  return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
  );
}

export default App;
