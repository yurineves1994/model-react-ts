import { useState } from 'react';

export const Home = () => {
  const [state, setState] = useState('Olá mundo');

  return (
    <>
      <h2>{state}</h2>
    </>
  );
};
