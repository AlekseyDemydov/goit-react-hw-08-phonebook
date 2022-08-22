import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  registerUser,
  loginUser,
} from '../../redux/authorization/authorizationOperation';
import { getAutError } from '../../redux/authorization/authorizationSelector';
import { useEffect } from 'react';
import { changeError } from '../../redux/authorization/authorizationSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#13b3ff',
      dark: '#0197f6',
      contrastText: '#fff',
    },
  },
});

const AuthorizationForm = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getAutError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;
    toast.error('You have entered invalid data. Please try again.', {
      autoClose: 2000,
      theme: 'colored',
    });
  }, [error]);

  const onLinkClick = e => {
    dispatch(changeError());
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (
      (title === 'Register' && name === '') ||
      password === '' ||
      email === ''
    ) {
      toast.error('All fields must be completed', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    if (title === 'Register') {
      const userRegisterData = { name, email, password };
      dispatch(registerUser(userRegisterData));
      reset();
      return;
    }
    const userLoginData = { email, password };
    dispatch(loginUser(userLoginData));
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        <Box component="form" onSubmit={onFormSubmit}>
          {title === 'Register' && (
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              autoComplete="current-name"
              required
              value={name}
              onChange={onInputChange}
            />
          )}
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            required
            value={email}
            onChange={onInputChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            minLength={7}
            required
            value={password}
            onChange={onInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {title}
          </Button>
          <Link
            to={title === 'Register' ? '/login' : '/register'}
            variant="body2"
            onClick={onLinkClick}
          >
            {title === 'Register'
              ? 'Do you have already account? Sign In'
              : "Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

AuthorizationForm.propTypes = {
  title: PropTypes.string,
};

export default AuthorizationForm;
