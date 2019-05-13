import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ''
    }
  }

  handleClick = (login) => {
    const endPoint = 'https://api.github.com/users/';
    axios.get(`${endPoint}${login}`)
        .then(response => {
        this.setState({
            info: response.data
        });
        })
    }

    render() {
      const imageStyle = { width: 100, height: 100 };
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.login}</td>
          <td>
            <img style={imageStyle} src={this.props.avatar_url} alt={this.props.avatar_url} />
          </td>
          <a href={`users/${this.props.login}`}>Detail</a>
        </tr>
      );
    }
}

  export default List;