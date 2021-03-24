import React, { Component } from 'react';
import './footer.css'
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
        <footer className="P-footer">
            <h4>Ici c'est le footer</h4>
        </footer>
        )
    }
}


export default PharmAPI;