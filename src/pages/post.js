import React, { Component } from 'react';
import './post.css'
import axios from 'axios';
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
                <h1>Ajouter une pharmacie</h1>
                <p>
                <label for="nom">Nom : </label><br></br>
                <input ref={this.fnom} type="text" id="nom" name="nom" placeholder="Nom de la pharmacie"></input>
                </p>
                <p>
                <label for="quartier">Quartier :</label><br></br>
                <input ref={this.fquartier} type="text" id="quartier" name="quartier" placeholder="Quartier ou se trouve la pharmacie"></input>
                </p>
                <p>
                <label for="Ville">Ville :</label><br></br>
                <input ref={this.fville} type="text" id="ville" name="ville" placeholder="Ville ou se trouve la pharmacie"></input>
                </p>
                <p>
                <label for="garde">Garde :</label><br></br>
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