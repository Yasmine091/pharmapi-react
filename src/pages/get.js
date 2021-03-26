import React, { Component } from 'react';
import './get.css'
import axios from 'axios';
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
                <h1>Les pharmacies de garde d'aujourd'hui</h1>
                <ul>
                {pharma.map(p => <li>{p}</li>)}
            </ul>
            </div>
        )
    }
}


export default getAPI;