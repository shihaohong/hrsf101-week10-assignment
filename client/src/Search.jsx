import React from 'react';

const SearchContacts = props => {
  return (
    <div>
      {/* <form onSubmit={props.queryContacts}> */}
      <input type="text" onChange={props.queryContacts} />
      {/* </form> */}
    </div>
  );
};

export default SearchContacts;
