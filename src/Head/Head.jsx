import { useState } from 'react';
import Card from './Card';
import Form from './Form';

const Head = () => {
  const [data, setData] = useState({});

  return (
    <>
      <Form setData={setData} />
      <Card data={data} />
    </>
  );
};

export default Head;