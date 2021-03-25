import React, { Component } from 'react';
import './get.css'
import axios from 'axios';
import { render, screen } from '@testing-library/react';


class getAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacie: '',
            garde: Boolean,
            pharmacies: []
        };
        this.phID = React.createRef();
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

    async setPharmacie() {
        await this.setState({
            pharmacie: this.phID.current.value
        });
        let pharma = this.state.pharmacies;
        let i = 0;
        render(
            <div>{pharma.map(p => {
                {
                    if(p.id == this.phID.current.value) {
                    console.log(p.nom);
                    return(
                        <ul>
                            <li>{p.nom}</li>
                            <li>{p.quartier}</li>
                            <li>{p.ville}</li>
                            <li>{p.garde}</li>
                        </ul>
                    )
                    }
                    else {
                        return;
                    }
                }
            })}
            </div>
        );
    }

    render() {
        return (
            <main className="P-main">
                <h1>Coucou! Voici ma 1ere page sur react!</h1>
                <input type="number" placeholder="pharmacie ici.." ref={this.phID}></input>
                <button onClick={this.setPharmacie}>Voir</button>
            </main>
        )
    }
}


export default getAPI;