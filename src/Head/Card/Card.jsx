import PropTypes from 'prop-types';

const Card = ({data}) => {

  return (
    <>
      <article>
        <img src={`"${data.url}"`} alt={data.name}/>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.age}</p>
      </article>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;