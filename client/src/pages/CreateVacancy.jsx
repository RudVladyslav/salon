import React from 'react';
import {TextField} from '@mui/material';
import {useForm} from 'react-hook-form';
import {fetchCreateVacancy, fetchCreateWorker} from '../http/fetchMethods';
import {toast} from 'react-toastify';
import Button from '@mui/material/Button';

const CreateVacancy = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors, isValid},
  } = useForm({
    defaultValue: {
      description: '',
      title: ''
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    try {
      const {message} = await fetchCreateVacancy(values);
      toast(message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
              error={Boolean(errors.title?.message)}
              helperText={errors.title?.message}
              {...register('title', {required: 'Вкажіть заголовок вакансії'})}
              type={'text'}
              sx={{marginTop: 2}}
              label="Заголовок"
              fullWidth
          />
          <TextField
              error={Boolean(errors.description?.message)}
              helperText={errors.description?.message}
              {...register('description', {required: 'Вкажіть опис вакансії'})}
              type={'text'}
              sx={{marginTop: 2}}
              label="Опис"
              fullWidth
          />
          <Button
              style={{marginTop: 40}}
              type="submit"
              size="large"
              variant="contained"
              fullWidth>
              Створити
          </Button>
        </form>

      </div>
  );
};

export default CreateVacancy;
