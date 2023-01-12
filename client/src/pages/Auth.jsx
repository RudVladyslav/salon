import React from 'react';
import {useLocation} from 'react-router-dom';
import appConstants from '../consts';
import {TextField, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';

const defaultValuesRegistration = Object.freeze({
  login: '',
  password: '',
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
});

const defaultValuesLogin = Object.freeze({
  login: '',
  password: '',
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
});

const Auth = () => {
  const {pathname} = useLocation();

  const defaultValues = pathname === appConstants.PATH.REGISTRATION
      ? defaultValuesRegistration
      : defaultValuesLogin

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
      <div>
        <Typography sx={{marginX: 'auto'}} component="div">
          socssconscns
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}
              style={{marginTop: 40, padding: '30px 100px'}}>
          <TextField
              error={Boolean(errors.login?.message)}
              helperText={errors.login?.message}
              {...register('login', {required: 'Вкажіть логін'})}
              type={'login'}
              sx={{marginTop: 2}}
              label="Login"
              fullWidth
          />
          <TextField
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register('password', {required: 'Вкажіть пароль'})}
              type={'password'}
              sx={{marginTop: 2}}
              label="Password"
              fullWidth
          />
          {pathname === appConstants.PATH.REGISTRATION && (
              <>
                <TextField
                    error={Boolean(errors.firstName?.message)}
                    helperText={errors.firstName?.message}
                    {...register('firstName', {required: "Вкажіть ваше ім'я"})}
                    type={'text'}
                    sx={{marginTop: 2}}
                    label="Ваше ім'я"
                    fullWidth
                />
                <TextField
                    error={Boolean(errors.lastName?.message)}
                    helperText={errors.lastName?.message}
                    {...register('lastName', {required: "Вкажіть ваше прізвіще"})}
                    type={'text'}
                    sx={{marginTop: 2}}
                    label="Ваше прізвіще"
                    fullWidth
                />
                <TextField
                    error={Boolean(errors.phone?.message)}
                    helperText={errors.phone?.message}
                    {...register('phone', {required: 'Вкажіть телефон'})}
                    type={'number'}
                    sx={{marginTop: 2}}
                    label="Номер телефону"
                    fullWidth
                />
                <TextField
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Вкажіть пошту'})}
                    type={'email'}
                    sx={{marginTop: 2}}
                    label="E-mail"
                    fullWidth
                />
              </>
          )}
          <Button
              style={{marginTop: 40}}
              type="submit"
              size="large"
              variant="contained"
              fullWidth>
            {pathname === appConstants.PATH.REGISTRATION ? 'Зареєструватись' : 'Увійти'}
          </Button>
        </form>
      </div>
  );
};

export default Auth;
