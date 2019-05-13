import React, {Component} from 'react';
import List from './List.js';
import axios from 'axios';


class FullUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          info: {},
          err: null
        };
    }

    componentDidMount() {
        axios({ method: 'get', url: 'https://api.github.com/users?per_page=100' })
          .then(response => {
            this.setState({ data: response.data});
          })
          .catch(err => {
            alert(err);
          }
        );
    }
      
    render() {
        const {data, info, err} = this.state;

        return (
            <div>
                <div className="block">
                    <p>List</p>
                    <table>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>username</th>
                            <th>image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                            return <List key={item.id} {...item} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FullUsers;

