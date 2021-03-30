import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

axios.defaults.baseURL = process.env.REACT_APP_API;

class getAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacies: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('page-title'));
        ReactDOM.render('Pharmacies de garde', document.getElementById('page-title'));
        axios.get(`/pharma-garde`)
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
                    <li>Nom : {p.nom}</li>
                    <li>Quartier : {p.quartier}</li>
                    <li>Ville : {p.ville}</li>
                    <li>Garde : {p.garde}</li>
                    </ul>
                    )}
            </div>
        )
    }
}


export default getAPI;