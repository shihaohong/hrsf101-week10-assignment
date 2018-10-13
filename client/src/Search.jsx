import React from 'react';


function Search(props) {
  return (
    <div>
      <label className="contact-form-item">
        Search:
        <input name={'searchValue'} onChange={props.handleChange}/>
      </label>
      <button className="contact-form-item" onClick={props.contactSearch}>
        Search
      </button>
    </div>
  )
}

export default Search;
