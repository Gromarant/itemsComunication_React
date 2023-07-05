import { useState, useContext } from 'react';
import { EmailContext } from '../../context/EmailContext';
import Card from './Card';
import Form from './Form';

const Head = () => {
  const [data, setData] = useState({});
  const { email } = useContext(EmailContext);

  return (
    <>
      <header>
        <h3>{email}</h3>
      </header>
      <Form setData={setData} />
      {data !== {} ? <Card data={data} /> : {}}
    </>
  );
};

export default Head;