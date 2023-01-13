import React from 'react';
import {useForm} from 'react-hook-form';
import {Box, TextField} from '@mui/material';
import consts from '../utils/consts';
import {AppContext} from '../index';

const Review = () => {
  const {user} = React.useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      text: ''
    },
    mode: 'onChange',
  })
  return (
      <Box sx={{ display: 'flex' }}>
        {user === consts.CLIENT && (
            <TextField
                label={'Написати відгук'}
                variant="outlined"
                maxRows={10}
                multiline
                fullWidth
                {...register('text', { required: 'Повинен бути відгук' })}
                error={Boolean(errors.text?.message)}
                helperText={errors.text?.message}
                sx={{ marginTop: 5, width: '700px', marginX: 'auto' }}
            />
        )}

      </Box>
  );
};

export default Review;
