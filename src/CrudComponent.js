import React, { useState } from 'react';
import axios from 'axios';

class CrudComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      name: '',
      age: '',
      email: '',
    };
  }

  async componentDidMount() {
    var response = await axios.get(
      'https://62152ebccdb9d09717b0e6f5.mockapi.io/users'
    );
    await this.setState({ user: response.data });
    console.log(response);
    console.log(this.state.user);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h3> Crud Component </h3>
        <h3>User Form</h3>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <br />

          <div>
            <label>Age</label>
            <input
              type="text"
              name="name"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>
          <br />

          <div>
            <label>Email</label>
            <input
              type="text"
              name="name"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <br />

          <div>
            <button type="submit" onSubmit={this.handleSubmit}>
              Submit
            </button>{' '}
            &nbsp;
            <button type="button">Reset</button>
          </div>
        </form>
        <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>
                  <button>Update</button> <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CrudComponent;
