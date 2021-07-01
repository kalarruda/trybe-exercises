import React from 'react';
import PropTypes from 'prop-types';

class ListCharacters extends React.Component {
  render() {
    const { characters, isFetching } = this.props;
    return (
      <ul className="list-content">
        {isFetching ? <p className="loading-content">Loading</p>
          : characters.map((e) => (
            <li key={ e.id } className="li-content">
              <section>
                <h2>{e.name}</h2>
                <img src={ e.image } alt={ e.name } />
                <p>{`Origin: ${e.origin.name}`}</p>
                <p>{`Gender: ${e.gender}`}</p>
                <p>{`Status: ${e.status}`}</p>
              </section>
            </li>
          ))}
      </ul>
    );
  }
}

ListCharacters.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  characters: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      origin: PropTypes.shape({ name: PropTypes.string.isRequired }),
      gender: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default ListCharacters;
