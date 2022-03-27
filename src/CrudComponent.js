import React, { useState } from 'react';
import axios from 'axios';

class CrudComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
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

  render() {
    return (
      <>
        <h3> Crud Component </h3>
        <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CrudComponent;
