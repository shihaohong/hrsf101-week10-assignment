import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      isPresent: false,
    }
  }

  handleSearchChange(event) {
    this.setState({
      query: event.target.query
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.get('/api/contacts', {
      query: this.state.query
    })
    .then(() => {
      //NEED TO IMPLEMENT RENDER FOR SEARCH NAME
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search for Contact"
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
        </form>
        <input type="submit" value="Search" />
      </div>
    )
  }
}

export default Search;