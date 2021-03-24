import React, { Component } from 'react';
import './nav.css'
import axios from 'axios';
import { render, screen } from '@testing-library/react';


class PharmAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <nav className="P-nav">
            <h4>Coucou! Ici c'est la nav</h4>
            <button>POST</button>
            <button>GET</button>
            <button>UPDATE</button>
            <button>DELETE</button>
        </nav>
        )
    }
}


export default PharmAPI;