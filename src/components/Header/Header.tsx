import { AppBar, Box, Button, Toolbar } from '@mui/material'
import devieraLogo from '../../assets/deviera-logo-blue.svg'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position='static' color='transparent' sx={{ paddingX: 2 }}>
      <Toolbar disableGutters>
        <Box flexGrow={1} display="flex">
          <Button
            component={Link}
            to={'/'}
            sx={{
              padding: 0,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
            <img src={devieraLogo} alt="Deviera Logo" width={148} />
          </Button>
        </Box>

        <Button component={Link} to={'/sign-in'} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
