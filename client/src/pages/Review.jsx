import React from 'react';
import {useForm} from 'react-hook-form';
import {Box, TextField} from '@mui/material';

const Review = () => {
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
      </Box>
  );
};

export default Review;
