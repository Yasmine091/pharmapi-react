import React, { Component } from 'react';
import './get.css'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


class getAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacie: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('page-title'));
        ReactDOM.render('Pharmacies de garde', document.getElementById('page-title'));
        axios.get(`http://localhost:8000/pharma-garde`)
            .then(res => {
                const pharma = res.data;
                this.setState({ pharmacie: Object.values(pharma[0]) });
            })
    }

    render() {
        let pharma = this.state.pharmacie;
        return (
            <div>
                <ul>
                    {pharma.map(p => <li>{p}</li>)}
                </ul>
            </div>
        )
    }
}


export default getAPI;