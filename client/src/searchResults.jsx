import React from 'react';

const SearchResults = (props) => {
  const options = props.results.map(r =>(
      <div>
      {r.firstName + " "}{r.lastName}
      </div>
  ))
  return <div>{options}</div>
}

export default SearchResults;