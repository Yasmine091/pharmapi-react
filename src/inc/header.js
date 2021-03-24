import React, { Component } from 'react';
import './header.css'
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
        <header className="P-header">
            <h4>Coucou! Ici c'est le header</h4>
        </header>
        )
    }
}


export default PharmAPI;