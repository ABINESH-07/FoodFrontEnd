import axios from "axios";
import React, { Component } from "react";
import './Food.css'

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/g')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>S no</th>
          <th>Items</th>
          <th>Rate</th>
          <th>Rating</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.sno}</td>
            <td>{user.items}</td>
            <td>{user.rate}</td>
            <td>{user.rating}</td>
            <td>{user.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    );
  }}
  
export default Showdata;