import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (

    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            zIndex: 100,
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            name="username"
            value={inputs.username}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Username"
            onChange={handleChange}
          />
          <TextField
            name="password"
            value={inputs.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="******"
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{ margin: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

export default Login;


const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding-top: 100px;
background-color: #87CEEB;
> form>div{
  background: #fff;
  
  
}
`