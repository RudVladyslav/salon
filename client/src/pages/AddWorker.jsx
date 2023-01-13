import React from 'react';
import {TextField, Typography} from '@mui/material';
import appConstants from '../utils/consts';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';
import {fetchCreateWorker} from '../http/fetchMethods';

const defaultValuesRegistration = Object.freeze({
  login: '',
  password: '',
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
});

const AddWorker = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValuesRegistration,
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    try {
      const data = await fetchCreateWorker(values);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <>
        <Typography sx={{textAlign: 'center', marginTop: 2}} variant="h3"
                    component="h3">
          {/*{pathname === appConstants.PATH.REGISTRATION ? 'Реєстрація': 'Увійти'}*/}
          Додати працівника
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}
              style={{marginTop: 40, padding: '0 100px'}}>
          <TextField
              error={Boolean(errors.login?.message)}
              helperText={errors.login?.message}
              {...register('login', {required: 'Вкажіть логін працівника'})}
              type={'login'}
              sx={{marginTop: 2}}
              label="Логін працівника"
              fullWidth
          />
          <TextField
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register('password', {required: 'Вкажіть пароль працівника'})}
              type={'password'}
              sx={{marginTop: 2}}
              label="Пароль працівника"
              fullWidth
          />
          <TextField
              error={Boolean(errors.firstName?.message)}
              helperText={errors.firstName?.message}
              {...register('firstName', {required: 'Вкажіть ім\'я працівника'})}
              type={'text'}
              sx={{marginTop: 2}}
              label="Ім'я працівника"
              fullWidth
          />
          <TextField
              error={Boolean(errors.lastName?.message)}
              helperText={errors.lastName?.message}
              {...register('lastName',
                  {required: 'Вкажіть прізвіще працівника'})}
              type={'text'}
              sx={{marginTop: 2}}
              label="Прізвіще працівника"
              fullWidth
          />
          <TextField
              error={Boolean(errors.phone?.message)}
              helperText={errors.phone?.message}
              {...register('phone', {required: 'Вкажіть телефон працівника'})}
              type={'number'}
              sx={{marginTop: 2}}
              label="Номер телефону працівника"
              fullWidth
          />
          <TextField
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('email', {required: 'Вкажіть пошту працівника'})}
              type={'email'}
              sx={{marginTop: 2}}
              label="E-mail працівника"
              fullWidth
          />
          <Button
              style={{marginTop: 40}}
              type="submit"
              size="large"
              variant="contained"
              fullWidth>
            Приєднати працівника до колективу
          </Button>
        </form>
      </>
  );
};

export default AddWorker;
