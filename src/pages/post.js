import React, { Component } from 'react';
import './post.css'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


class postAPI extends Component {
    constructor(props) {
        super(props);

        this.fnom = React.createRef();
        this.fquartier = React.createRef();
        this.fville = React.createRef();
        this.fgarde = React.createRef();
        this.render = this.render.bind(this);
        this.putPharmacie = this.putPharmacie.bind(this);
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('page-title'));
        ReactDOM.render('Ajouter pharmacies', document.getElementById('page-title'));
    }

    putPharmacie() {
        axios.post('http://localhost:8000/pharma', {
            nom: this.fnom.current.value,
            quartier: this.fquartier.current.value,
            ville: this.fville.current.value,
            garde: this.fgarde.current.value,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="nom">Nom : </label><br></br>
                    <input ref={this.fnom} type="text" id="nom" name="nom" placeholder="Nom de la pharmacie"></input>
                </p>
                <p>
                    <label htmlFor="quartier">Quartier :</label><br></br>
                    <input ref={this.fquartier} type="text" id="quartier" name="quartier" placeholder="Quartier ou se trouve la pharmacie"></input>
                </p>
                <p>
                    <label htmlFor="Ville">Ville :</label><br></br>
                    <input ref={this.fville} type="text" id="ville" name="ville" placeholder="Ville ou se trouve la pharmacie"></input>
                </p>
                <p>
                    <label htmlFor="garde">Garde :</label><br></br>
                    <input ref={this.fgarde} type="text" id="garde" name="garde" placeholder="Jour de garde"></input>
                </p>
                <p>
                    <button onClick={this.putPharmacie}>Envoyer</button>
                </p>
            </div>
        )
    }
}


export default postAPI;