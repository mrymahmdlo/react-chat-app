import {Link, Stack, Typography} from '@mui/material';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import RegisterForm from '../../sections/auth/RegisterForm';

const Register = () => {
  return (
    <Stack spacing={2} sx={{mb: 5, position: 'relative', direction: 'rtl'}}>
      <Typography variant="h4">ایجاد حساب کاربری در سامانه </Typography>
      <Stack direction={'row'} spacing={0.5}>
        <Typography variant="body2">حساب کاربری دارید؟</Typography>
        <Link component={RouterLink} to="/auth/login" variant="subtitle2">
          ورود
        </Link>
      </Stack>
      {/* Register Form */}
      <RegisterForm />
      {/* 
      <Typography
        component={'div'}
        sx={{
          color: 'text.secondary',
          mt: 3,
          typography: 'caption',
          textAlign: 'center',
        }}>
        {'By signining up, I agree to '}
        <Link underline="always" color="text.primary">
          Terms of service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary">
          Privacy policy
        </Link>
      </Typography> */}
      {/* <AuthSocial/> */}
    </Stack>
  );
};

export default Register;
