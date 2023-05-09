import PropTypes from "prop-types";

function Myprop({ name, age, email }) {
  return (
    <form>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </form>
  );
}
Myprop.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
};
export default Myprop;
