import { useState } from 'react';
import Card from './Card/Card';
import Form from './Form/Form';

const Head = () => {
  const [data, setData] = useState({
    name: "Marian",
    email: "gromarant@gmail.com",
    url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
    age: 32,
  });

  return (
    <>
      <Form setData={setData} />
      <Card data={data} />
    </>
  );
};

export default Head;