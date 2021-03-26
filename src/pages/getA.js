import React, { Component } from 'react';
import './getA.css'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


class getAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacies: []
        };
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('page-title'));
        ReactDOM.render('Liste des pharmacies', document.getElementById('page-title'));
        axios.get(`http://localhost:8000/pharma`)
            .then(res => {
                const pharma = res.data;
                this.setState({ pharmacies: pharma });
            })
    }

    render() {
        let pharma = this.state.pharmacies;
        return (
            <div>
                {pharma.map(p =>
                    <ul>
                        <li>{p.nom}</li>
                        <li>{p.quartier}</li>
                        <li>{p.ville}</li>
                        <li>{p.garde}</li>
                    </ul>
                )}
            </div>
        )
    }
}


export default getAPI;