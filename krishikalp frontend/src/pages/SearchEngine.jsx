import PropTypes from 'prop-types';

function SearchEngine({ query, setQuery, search }) {
  //handler function
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search(e);
    }
  };

  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="enter city name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={search}><i className="fas fa-search" style={{ fontSize: "18px" }}></i></button>
    </div>
  );
}

SearchEngine.propTypes = {
  query: PropTypes.string.isRequired, // Ensures `query` is a string and is required
  setQuery: PropTypes.func.isRequired, // Ensures `setQuery` is a function and is required
  search: PropTypes.func.isRequired,   // Ensures `search` is a function and is required
};

export default SearchEngine;