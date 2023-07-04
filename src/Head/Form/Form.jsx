import { useState, useContext } from 'react';
import { EmailContext } from '../../context/EmailContext';
import PropTypes from 'prop-types';

const clearForm = {
  name: "",
  email: "",
  url: "",
  age: ""
};

const Form = ({ setData }) => {
  const [inputValue, setInputValue] = useState({...clearForm});
  const { setEmail }  = useContext(EmailContext);

  const handleChange = (e) => {

    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setData(inputValue);
    setInputValue({...clearForm})
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name: 
          <input type="text" name="name" value={inputValue.name} onChange={handleChange} placeholder='enter your name' />
        </label><br />

        <label htmlFor="email">Email: 
          <input type="email" name="email" id="email" value={inputValue.email} onChange={handleChange} placeholder='Enter your email' />
        </label><br />

        <label htmlFor="url">Image url: 
          <input type="text" name="url" id="url" value={inputValue.url} onChange={handleChange} placeholder='Enter image url' />
        </label><br />

        <label htmlFor="age">Edad: 
          <input type="number" name="age" id="age" value={inputValue.age} onChange={handleChange} placeholder='Enter your age' />
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