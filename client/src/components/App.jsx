import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            firstName: '', 
            lastName: '', 
            email: '', 
            phone: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSearch(event) {
        alert("search");
        event.preventDefault();
        $.ajax({
            method: 'GET', 
            url: '/api/contacts',
            contentType: 'application/JSON',
            data: JSON.stringify({
                search: this.state.search
            }),
            success: function(result) {
                console.log("ajax get success", result);
            }, 
            error: function(err) {
                console.log("ajax request failed", err);
            }
        });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName);
        event.preventDefault();
        //would make a post request to the server --> database
        $.ajax({
            method: 'POST', 
            url: 'http://localhost:3000/api/contacts',
            contentType: 'application/JSON',
            data: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: parseInt(this.state.phone),
                address: this.state.address
            }),
            success: function(result) {
                console.log("ajax request success", result);
            }, 
            error: function(err) {
                console.log("post error");
            }
        });
    }
    
    render() {
        return (
            <div> 
            <form onSubmit={this.handleSearch}>
            Search: 
            <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
            <input type="submit" value="Submit" onSubmit={this.handleSearch}/>
            </form>
            <form onSubmit={this.handleSubmit}>
            <label>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
            Last Name: 
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/> 
            Email:
            <input type="text" name="email"value={this.state.email} onChange={this.handleChange}/>
            Phone:
            <input type="text" name="phone" value={this.state.guests} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default App;