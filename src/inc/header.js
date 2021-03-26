import React, { Component } from 'react';
import './header.css'
import axios from 'axios';
import { render, screen } from '@testing-library/react';


class Head extends Component {

    render() {
        return (
            <header className="P-header">
                <h1>PharmAPI</h1>
                <hr></hr>
                <h2 id="page-title"></h2>
            </header>
        )
    }
}


export default Head;