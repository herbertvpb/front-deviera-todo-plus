import { Box, Button, Container, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import devieraLogo from '../../assets/deviera-logo-blue.svg'
import { Link } from "react-router-dom";

type SignInForm = {
  email: string,
  password: string
}

export function SignIn() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: SignInForm) => console.log(data);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
        marginTop={16}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 4
        }}>
          <img src={devieraLogo} alt="Deviera Logo" width={512} />
        </Box>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Senha"
              variant="outlined"
            />
          )}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
        >
          Entrar
        </Button>

        <Button
          component={Link}
          to={'/sign-up'}
          color="inherit"
          sx={{ textTransform: 'none'}}
          size="small"
        >
          Não possui conta? Cadastre-se
        </Button>
      </Box>
    </Container>
  )
}
