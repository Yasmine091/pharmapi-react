import React, { Component } from 'react';
import './put.css'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';


class putAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacies: []
        };

        this.spharma = React.createRef();
        this.render = this.render.bind(this);
        this.delPharmacie = this.delPharmacie.bind(this);
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('page-title'));
        ReactDOM.render('Supprimer pharmacies', document.getElementById('page-title'));
        axios.get(`http://localhost:8000/pharma`)
            .then(res => {
                const pharma = res.data;
                this.setState({ pharmacies: pharma });
            })
    }

    delPharmacie() {
        console.log(this.spharma.current.value)
        axios.delete('http://localhost:8000/pharma/' + this.spharma.current.value)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let pharma = this.state.pharmacies;
        return (
            <div>
                <p>
                    <label htmlFor="pharmacie">Pharmacie : </label><br></br>
                    <select name="pharmacie" id="pharmacie" ref={this.spharma}>
                        {pharma.map(p =>
                            <option value={p.id}>{p.nom}</option>
                        )}
                    </select>
                    <button onClick={this.delPharmacie}>Envoyer</button>
                </p>
            </div>
        )
    }
}


export default putAPI;