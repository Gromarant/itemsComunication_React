import { useState } from 'react';
import PropTypes from 'prop-types';


const Form = ({ setData }) => {
  const [inputValue, setInputValue] = useState({})

  const handleChange = (e) => {
    
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setData(inputValue);
    setInputValue({
      name: "",
      email: "",
      url: "",
      age: ""
    })
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name: 
          <input type="text" name="name" value={inputValue.name} onChange={handleChange} />
        </label><br />

        <label htmlFor="email">Email: 
          <input type="email" name="email" id="email" value={inputValue.email} onChange={handleChange} />
        </label><br />

        <label htmlFor="url">Image url: 
          <input type="text" name="url" id="url" value={inputValue.url} onChange={handleChange} />
        </label><br />

        <label htmlFor="age">Edad: 
          <input type="number" name="age" id="age" value={inputValue.age} onChange={handleChange} />
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