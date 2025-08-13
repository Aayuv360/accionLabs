import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 12, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" method="POST" action="/api/login" noValidate>
          <TextField
            name="username"
            label="User Name"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Use username <strong>hpuser</strong> (hp) or <strong>lenovouser</strong> (lenovo). Password any.
        </Typography>
      </Paper>
    </Container>
  );
}
