import { useState, useContext } from 'react';
import { EmailContext } from '../context/EmailContext';
import Card from './Card';
import Form from './Form';

const Head = () => {
  const [data, setData] = useState({});
  const { email } = useContext(EmailContext);

  return (
    <>
      <h3>{email}</h3>
      <Form setData={setData} />
      <Card data={data} />
    </>
  );
};

export default Head;