import { useState } from 'react';
import PropTypes from 'prop-types';


const Form = ({ setData }) => {
  const [inputValue, setInputValue] = useState({})

  const handleChange = (e) => {
    e.preventDefault();

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.url]: e.target.value,
      [e.target.age]: e.target.value,
    })
};

  const handleClick = () => {
    setData(inputValue);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name: 
          <input type="text" />
        </label><br />

        <label htmlFor="email">Email: 
          <input type="email" id="email" onChange={handleChange} />
        </label><br />

        <label htmlFor="url">Image url: 
          <input type="text" id="url" />
        </label><br />

        <label htmlFor="age">Edad: 
          <input type="number" id="age" />
        </label><br />
        <button onClick={handleClick}>Enviar</button>
      </form>
    </>
  );
};

Form.propTypes  = {
  setData: PropTypes.func,
}

export default Form;