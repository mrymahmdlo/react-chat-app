import {yupResolver} from '@hookform/resolvers/yup';
import {Alert, Button, IconButton, InputAdornment, Stack} from '@mui/material';
import {Eye, EyeSlash} from 'phosphor-react';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {RHFTextField} from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  //validation rules
  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('نام باید تکمیل شود.'),
    lastName: Yup.string().required('نام خانوادگی باید تکمیل شود.'),
    email: Yup.string()
      .required('ایمیل باید تکمیل شود.')
      .email('ایمیل باید معتبر باشد.'),
    password: Yup.string().required('رمز عبور باید تکمیل شود.'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: 'dulanjali@gmail.com',
    password: 'dula@123',
  };

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: {errors, isSubmitting, isSubmitSuccessful},
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{xs: 'column', sm: 'row'}} gap={2}>
          <RHFTextField name="firstName" label="نام" />
          <RHFTextField name="lastName" label="نام خانوادگی" />
        </Stack>
        <RHFTextField name="email" label="آدرس ایمیل" />
        <RHFTextField
          name="password"
          label="رمز عبور"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: 'text.primary',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) =>
                theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
            },
          }}>
          ایجاد حساب کاربری
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
