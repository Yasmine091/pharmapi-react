import React, { Component } from 'react';
import './main.css'
import axios from 'axios';
import { render, screen } from '@testing-library/react';


class PharmAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacie: '',
            garde: Boolean,
            pharmacies: []
        };
        this.PhINP = React.createRef();
        this.setPharmacie = this.setPharmacie.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/pharma`)
          .then(res => {
            const pharma = res.data;
            this.setState({ pharmacies: pharma });
        })
    }
    
    async setPharmacie(){
        await this.setState({
            pharmacie: this.PhINP.current.value
        });
        let pharma = this.state.pharmacies;
        render(
        <ul>{pharma.map(p => <li>{Object.values(p.nom)}</li>)}
        </ul>);
    }

    render() {
        return (
        <main className="P-main">
            <h1>Coucou! Voici ma 1ere page sur react!</h1>
            <input type="text" placeholder="pharmacie ici.." ref={this.PhINP}></input>
            <button onClick={this.setPharmacie}>Voir</button>
        </main>
        )
    }
}


export default PharmAPI;