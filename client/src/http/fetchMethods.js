import axios from './axios';

export const fetchRegister = async (values) => {
  try {
    return await axios.post('/auth/registration', values)
  } catch (error) {
    console.log(error);
  }
}

export const fetchAuthenticate = async (values) => {
  try {
    const {data} = await axios.post('/auth/authenticate', values)
    return data
  } catch (error) {
    console.log(error);
  }
}

export const fetchCreateWorker = async (values) => {
  try {
    const {data} = await axios.post('/admin/worker', values)
    return data
  } catch (error) {
    console.log(error);
  }
}

export const fetchGetWorkers = async (values) => {
  try {
    const {data} = await axios.get('/admin/worker')
    return data
  } catch (error) {
    console.log(error);
  }
}
