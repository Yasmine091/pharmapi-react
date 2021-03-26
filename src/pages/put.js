import React, { Component } from 'react';
import './put.css'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


class putAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pharmacies: [],
            toggled: false
        };

        this.spharma = React.createRef();
        this.fid = React.createRef();
        this.fnom = React.createRef();
        this.fquartier = React.createRef();
        this.fville = React.createRef();
        this.fgarde = React.createRef();
        this.render = this.render.bind(this);
        this.editPharmacie = this.editPharmacie.bind(this);
        this.showSelectedPharmacie = this.showSelectedPharmacie.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/pharma/`)
            .then(res => {
                const pharma = res.data;
                this.setState({ pharmacies: pharma });
            })
        }
        
        editPharmacie() {
            axios.put('http://localhost:8000/pharma/' + this.fid.current.value, {
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
            ReactDOM.render('', document.getElementById('form'));
            this.setState({ toggled: false });
        }
        
        showSelectedPharmacie() {
            this.componentDidMount();
            ReactDOM.render('', document.getElementById('form'));
            this.setState({ toggled: false });
            let pharma = this.state.pharmacies;
            let fcontent =
            pharma.map(p => {
                if (p.id == this.spharma.current.value && this.state.toggled === false) {
                    this.setState({ toggled: true });
                    return(
                <div>
                    <p>
                        <label for="nom">Nom : </label><br></br>
                        <input ref={this.fnom} type="text" id="nom" name="nom" placeholder="Nom de la pharmacie" defaultValue={p.nom}></input>
                    </p>
                    <p>
                        <label for="quartier">Quartier :</label><br></br>
                        <input ref={this.fquartier} type="text" id="quartier" name="quartier" placeholder="Quartier ou se trouve la pharmacie" defaultValue={p.quartier}></input>
                    </p>
                    <p>
                        <label for="Ville">Ville :</label><br></br>
                        <input ref={this.fville} type="text" id="ville" name="ville" placeholder="Ville ou se trouve la pharmacie" defaultValue={p.ville}></input>
                    </p>
                    <p>
                        <label for="garde">Garde :</label><br></br>
                        <input ref={this.fgarde} type="text" id="garde" name="garde" placeholder="Jour de garde" defaultValue={p.garde}></input>
                    </p>
                    <p>
                        <input type="hidden" ref={this.fid} value={p.id}></input>
                        <button onClick={this.editPharmacie}>Envoyer</button>
                    </p>
                </div>
                    )
                    } else {
                        return;
                    }
                })
                ;
        ReactDOM.render(fcontent, document.getElementById('form'));
    }

    render() {
        let pharma = this.state.pharmacies;
        return (
            <div>
            <div>
                <h1>Modifier une pharmacie</h1>
                <p>
                    <label for="pharmacie">Pharmacie : </label><br></br>
                    <select name="pharmacie" id="pharmacie" ref={this.spharma}>
                        {pharma.map(p =>
                            <option value={p.id}>{p.nom}</option>
                        )}
                    </select>
                    <button onClick={this.showSelectedPharmacie}>Modifier</button>
                </p>
            </div>
            <div id="form"></div>
            </div>
        )
    }
}


export default putAPI;