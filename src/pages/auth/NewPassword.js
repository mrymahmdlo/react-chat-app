import {Link, Stack, Typography} from '@mui/material';
import {CaretLeft} from 'phosphor-react';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{mb: 5, position: 'relative', direction: 'rtl'}}>
        <Typography variant="h3" paragraph>
          بازنشانی رمز؟
        </Typography>
        <Typography sx={{color: 'text.secondary', mb: 5}}>
          لطفا رمز عبور جدید خود را وارد کنید.
        </Typography>
      </Stack>
      {/* New Password Form */}

      <NewPasswordForm />

      <Link
        component={RouterLink}
        to="/auth/login"
        color="inherit"
        variant="subtitle2"
        sx={{mt: 3, mx: 'auto', alignItems: 'center', display: 'inline-flex'}}>
        <CaretLeft />
        بازگشت به ورود
      </Link>
    </>
  );
};

export default NewPassword;
