import { AppBar, Box, Button, Toolbar } from '@mui/material'
import devieraLogo from '../../assets/deviera-logo-blue.svg'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position='static' color='transparent' sx={{ paddingX: 2 }}>
      <Toolbar disableGutters>
        <Box flexGrow={1} display="flex">
          <img src={devieraLogo} alt="Deviera Logo" width={148} />
        </Box>

        <Button component={Link} to={'/sign-in'} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
