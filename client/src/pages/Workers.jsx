import React, {useEffect, useState} from 'react';
import {fetchGetWorkers} from '../http/fetchMethods';

const Workers = () => {

  const [workers, setWorkers] = useState([])

  const getWorkers = async () => {
    try{
      const data = await fetchGetWorkers()
      setWorkers(data)
    }catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getWorkers()
  }, [])

  return (
      <div>
        {workers.map(worker => <p>{worker.firstName}</p>)}
      </div>
  );
};

export default Workers;
