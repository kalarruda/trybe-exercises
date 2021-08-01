import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { name, handleChange, origin, status, gender } = this.props;
    return (
      <form className="form-content">
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="origin">
          Origin:
          <input
            id="origin"
            name="origin"
            type="text"
            value={ origin }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="gender">
          Gender:
          <select
            id="gender"
            name="gender"
            value={ gender }
            onChange={ handleChange }
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
          </select>
        </label>
        <label htmlFor="status">
          Status:
          <select
            id="status"
            name="status"
            value={ status }
            onChange={ handleChange }
          >
            <option value="">Select</option>
            <option value="Dead">Dead</option>
            <option value="Alive">Alive</option>
            <option value="unknown">unknown</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  name: PropTypes.string,
  origin: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default SearchBar;
