import { Button, Paper, Stack, TextField } from "@mui/material"

export const Login = () => {
    return (
        <Stack style={{ height: '100vh', width: '100%', justifyContent: "center" }}>
            <Paper elevation={3} style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <TextField label='Email' />
                <TextField label='Senha' />
                <Button variant="contained" style={{ width: '200px' }}>
                    Login
                </Button>
            </Paper>
        </Stack>
    )
}