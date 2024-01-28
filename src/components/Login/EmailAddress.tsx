import React, { useState, FC } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface EmailAddressProps {
  onSignUpClick: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EmailAddress: FC<EmailAddressProps> = ({
  onSignUpClick,
  handleSubmit,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(true);
  const [showSignUpButton, setShowSignUpButton] = useState<boolean>(false);
  const [hideComponent, setHideComponent] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsButtonActive(validateEmail(e.target.value));
    setIsEmailValid(true);
    setShowSignUpButton(false);
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleContinue = () => {
    if (email !== "cha@gmail.com") {
      setIsEmailValid(false);
      setShowSignUpButton(true);
      setIsButtonActive(false);
    } else {
      setIsPasswordVisible(true);
    }
  };

  const handleLogin = () => {
    if (password !== "1234") {
      setIsPasswordCorrect(false);
    } else {
      setIsAuthenticated(true);
      navigate("/menu");
    }
  };

  const handleSignUpClick = () => {
    setHideComponent(true);
    onSignUpClick();
  };

  return (
    <Box sx={{ display: hideComponent ? "none" : "block" }}>
      <Typography
        variant="h6"
        sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
      >
        Email address
      </Typography>
      <TextField
        id="email"
        label="Enter your email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px" }}
        value={email}
        onChange={handleEmailChange}
        error={!isEmailValid}
        helperText={!isEmailValid && "Email address Invalid"}
      />
      {isPasswordVisible ? (
        <>
          <TextField
            id="password"
            label="Enter your password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "16px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={!isPasswordCorrect}
            helperText={!isPasswordCorrect && "Password incorrect"}
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
            onClick={handleLogin}
          >
            Login Now
          </Button>
        </>
      ) : (
        <>
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
            onClick={handleContinue}
            disabled={!isButtonActive}
          >
            Continue
          </Button>
          {showSignUpButton && (
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
              onClick={handleSignUpClick}
            >
              Sign Up Now
            </Button>
          )}
        </>
      )}
      <Typography
        sx={{
          mt: 2,
          fontSize: "14px",
          textAlign: "center",
          color: "#00ccbc",
        }}
      >
        Forgot password?
      </Typography>
    </Box>
  );
};

export default EmailAddress;
