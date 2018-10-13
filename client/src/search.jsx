import React from 'react';
import axios from 'axios';
import SearchResults from './searchResults.jsx';



class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      results: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.searchContact = this.searchContact.bind(this);
  }
  searchContact() {
    axios
    .get('/api/contacts/name', this.state.value)
    .then(response => {
       this.setState({
         contacts: response.data
       })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        searchResults: "Contact list entry does not exist"
      })
    })
  }


 handleInputChange(e) {
  console.log('search value', e.target.value)
  this.setState({
    value: e.target.value
  }, () => {
    if(this.state.value.length > 1){
      this.searchContact()
    }
  });
 }

 render() {
   return (
       <form>
         <label> Search Contacts:
         <input
         placeholder="Search for contact"
         type="text"
         value={this.state.value}
         onChange={this.handleInputChange}
       />  
       </label>
       <input type="submit" value="Submit" />

      <SearchResults results={this.state.results}/>

       </form>
    
   )
 }
}

export default Search;