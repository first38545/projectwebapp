import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useAlert } from '../component/alert';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [checkLogin, setCheckLogin] = useState(false)
  const [checkClickLogin, setCheckClickLogin] = useState(false)

  const handleSubmit = (event) => {
    setCheckClickLogin(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let account = data.get('account')
    let password = data.get('password')
    if (account !== 'admin' || password !== 'password') {
      setCheckLogin(false)
    } else {
      setCheckLogin(true)
      router.push('/settings')
    }
    console.log({
      email: data.get('account'),
      password: data.get('password'),
    });
  };

  const theme = createTheme();

  const showAlert = (checkAlert) => {
    if (checkAlert) {
      return (<Alert severity="success">This is a success alert — check it out!</Alert>)
    }
    return (<Alert severity="error">This is an error alert — check it out!</Alert>)
  }
  return (

    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="account"
                label="Account"
                name="account"
                autoComplete="account"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {checkClickLogin && showAlert(checkLogin)}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Login