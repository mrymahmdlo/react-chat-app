import {yupResolver} from '@hookform/resolvers/yup';
import {Alert, Button, IconButton, InputAdornment, Stack} from '@mui/material';
import {Eye, EyeSlash} from 'phosphor-react';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {RHFTextField} from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';

const NewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  //validation rules
  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, 'رمز باید حداقل 6 کاراکتر داشته باشد.')
      .required('رمز الزامی است.'),
    confirmPassword: Yup.string()
      .required('رمز باید تکمیل شود.')
      .oneOf([Yup.ref('newPassword'), null], 'رمز باید منطبق باشد.'),
  });

  const defaultValues = {
    newPassword: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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
      <Stack sx={{direction: 'rtl'}} spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name="newPassword"
          label="رمز عبور جدید"
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

        <RHFTextField
          name="confirmPassword"
          label="تایید رمز عبور"
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
          تایید
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
