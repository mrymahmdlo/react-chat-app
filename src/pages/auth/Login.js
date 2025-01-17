import {Link, Stack, Typography} from '@mui/material';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import AuthSocial from '../../sections/auth/AuthSocial';
import LoginForm from '../../sections/auth/LoginForm';

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{mb: 5, position: 'relative', direction: 'rtl'}}>
        <Typography variant="h4">ورود به سیستم </Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">کاربر جدید؟</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            ایجاد حساب کاربری
          </Link>
        </Stack>
        {/* Login form */}
        <LoginForm />
        {/* Auth Social */}
        {/* <AuthSocial /> */}
      </Stack>
    </>
  );
};

export default Login;
