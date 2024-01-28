import React, { useState, FC } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpNow: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsButtonActive(validateFields());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsButtonActive(validateFields());
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsButtonActive(validateFields());
  };

  const validateFields = () => {
    return name.trim() !== "" && validateEmail(email) && password.trim() !== "";
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = () => {
    window.location.reload();
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
      >
        Sign Up Now
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={email}
        onChange={handleEmailChange}
        error={email.trim() !== "" && !validateEmail(email)}
        helperText={
          email.trim() !== "" && !validateEmail(email) && "Invalid email"
        }
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00ccbc",
          color: "white",
          padding: "14px 1px",
          marginBottom: "8px",
          fontWeight: "600",
          textTransform: "none",
        }}
        fullWidth
        onClick={handleSignUp}
        disabled={!isButtonActive}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpNow;
