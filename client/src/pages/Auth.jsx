import React from 'react';
import {useLocation} from 'react-router-dom';

const Auth = () => {
  const {pathname} = useLocation()
  return (
      <div>
        Auth
        <p>
          {pathname}
        </p>
      </div>
  );
};

export default Auth;
