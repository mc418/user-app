import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import axios from "axios";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        }
        
    }

    componentDidMount() {
        const endPoint = 'https://api.github.com';
        console.log(this.props.props.match.url);
        axios.get(`${endPoint}${this.props.props.match.url}`)
            .then(response => {
            this.setState({
                info: response.data
            });
        })
    }

    render() {
        const { info } = this.state;
        console.log(info);
        const noneSelectMesg = <div className="info">select user!</div>;
        const detailInfo = <div>
            <div className="info">{`name: ${info.name}`}</div>
            <div className="info">{`location: ${info.location}`}</div>
            <div className="info">{`following: ${info.following}`}</div>
            <div className="info">{`followers: ${info.followers}`}</div>
        </div>;
        return (
            <div className="block">
                <p>Detail</p>
                <div className="detail">
                    {info.login !== undefined && detailInfo}
                    {info.login === undefined && noneSelectMesg}
                </div>
                <Link to='/users'>Back</Link>
            </div>
        );
    }
}
  export default Detail;