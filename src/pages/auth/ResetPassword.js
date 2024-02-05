import {Link, Stack, Typography} from '@mui/material';
import {CaretLeft} from 'phosphor-react';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{mb: 5, position: 'relative', direction: 'rtl'}}>
        <Typography variant="h3" paragraph>
          رمز عبور خود را فراموش کردید؟
        </Typography>
        <Typography sx={{color: 'text.secondary', mb: 5}}>
          لطفا آدرس ایمیل مرتبط با حساب خود را وارد کنید.
          <br />
          لینکی برای بازنشانی رمز عبور برای شما ایمیل می شود.
        </Typography>
        {/* Reset password form */}
        <ResetPasswordForm />

        <Link
          component={RouterLink}
          to="/auth/login"
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: 'auto',
            alignItems: 'center',
            display: 'inline-flex',
          }}>
          بازگشت به ورود
          <CaretLeft />
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
